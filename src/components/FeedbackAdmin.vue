<template>
  <section class="wrap">
    <h2>Feedback – Admin (lokal)</h2>

    <form class="login" v-if="!authed" @submit.prevent="login">
      <label> Benutzername
        <input v-model="user" autocomplete="username">
      </label>
      <label> Passwort
        <input v-model="pass" type="password" autocomplete="current-password">
      </label>
      <button>Anmelden</button>
      <p class="muted">Standard: admin / admin123 (in server/.env ändern)</p>
    </form>

    <div v-else>
      <div class="bar">
        <button @click="load">Neu laden</button>
        <label>Limit
          <input v-model.number="limit" type="number" min="10" max="1000" step="10" style="width:90px">
        </label>
        <button @click="logout">Abmelden</button>
      </div>
      <p v-if="error" class="error">{{ error }}</p>

      <div v-for="(item,i) in items" :key="i" class="card">
        <div class="head">
          <strong>{{ item.category }}</strong> • {{ item.severity }} • <span class="ts">{{ item.ts }}</span>
        </div>
        <div class="meta">
          <span>Von: {{ item.name || '–' }} {{ item.email ? `(${item.email})` : '' }}</span>
          <span>Seite: <a :href="item.page" target="_blank">{{ item.page || '–' }}</a></span>
        </div>
        <pre class="msg">{{ item.message }}</pre>
      </div>

      <p v-if="!items.length" class="muted">Keine Einträge.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const API = "http://localhost:3000/api/admin/feedback";

const authed = ref(false);
const user = ref("");
const pass = ref("");
const limit = ref(200);
const items = ref([]);
const error = ref("");

function logout(){ authed.value = false; items.value = []; user.value = ""; pass.value = ""; }

async function login() {
  error.value = "";
  const ok = await load();
  authed.value = ok;
  if (!ok) error.value = "Login fehlgeschlagen.";
}

async function load() {
  try {
    const token = btoa(`${user.value}:${pass.value}`);
    const res = await fetch(`${API}?limit=${limit.value}`, {
      headers: { "Authorization": `Basic ${token}` }
    });
    if (res.status === 401) return false;
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "Fehler");
    items.value = data.items || [];
    return true;
  } catch (e) {
    console.error(e);
    error.value = "Laden fehlgeschlagen.";
    return false;
  }
}
</script>

<style scoped>
.wrap { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:20px; }
.login label { display:block; margin:10px 0; font-weight:600; }
.login input { width:100%; margin-top:6px; padding:10px; border:1px solid #d1d5db; border-radius:8px; font:inherit; }
.bar { display:flex; gap:10px; align-items:center; margin-bottom:12px; }
.card { border:1px solid #e5e7eb; border-radius:12px; padding:12px; margin:10px 0; background:#fafafa; }
.head { font-size:14px; margin-bottom:6px; }
.meta { display:flex; gap:16px; font-size:12px; color:#555; margin-bottom:8px; flex-wrap:wrap; }
.msg { white-space:pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.muted { color:#666; }
.error { color:#b91c1c; }
</style>