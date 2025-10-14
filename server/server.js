import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.resolve(__dirname, process.env.DATA_DIR || "./data");
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";

app.use(cors());
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}
function fileForMonth() {
  const ym = new Date().toISOString().slice(0, 7); // YYYY-MM
  return path.join(DATA_DIR, `feedback-${ym}.jsonl`);
}
function basicAuth(req, res, next) {
  const hdr = req.headers.authorization || "";
  if (!hdr.startsWith("Basic ")) return res.status(401).set("WWW-Authenticate","Basic").send("Auth required");
  const creds = Buffer.from(hdr.slice(6), "base64").toString("utf8"); // "user:pass"
  const [u, p] = creds.split(":");
  if (u === ADMIN_USER && p === ADMIN_PASS) return next();
  return res.status(401).set("WWW-Authenticate","Basic").send("Bad credentials");
}


app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/feedback", (req, res) => {
  const { name = "", email = "", category = "", severity = "Mittel", page = "", message = "", website = "" } = req.body || {};


  if (website) return res.json({ ok: true });

 
  if (!category || !message) {
    return res.status(400).json({ ok: false, error: "category and message required" });
  }

  const record = {
    ts: new Date().toISOString(),
    name: String(name).trim(),
    email: String(email).trim(),
    category: String(category).trim(),
    severity: String(severity).trim() || "Mittel",
    page: String(page).trim(),
    message: String(message).trim(),
    ua: req.headers["user-agent"] || "",
    ip_local: req.socket.remoteAddress || ""
  };

  try {
    ensureDir();
    const f = fileForMonth();
    fs.appendFileSync(f, JSON.stringify(record, null, 0) + "\n", { encoding: "utf8" });
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "write failed" });
  }
});


app.get("/api/admin/feedback", basicAuth, (req, res) => {
  try {
    ensureDir();
    const files = fs.readdirSync(DATA_DIR)
      .filter(n => n.startsWith("feedback-") && n.endsWith(".jsonl"))
      .sort()            
      .reverse();         
    const limit = Math.max(1, Math.min(1000, Number(req.query.limit) || 200));

    let items = [];
    for (const fname of files) {
      const full = path.join(DATA_DIR, fname);
      const lines = fs.readFileSync(full, "utf8").split("\n").filter(Boolean).reverse();
      for (const line of lines) {
        try {
          items.push(JSON.parse(line));
          if (items.length >= limit) break;
        } catch {}
      }
      if (items.length >= limit) break;
    }
    return res.json({ ok: true, items });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "read failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Feedback server listening on http://localhost:${PORT}`);
});