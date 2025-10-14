<template>
  <section class="wrap">
    <h2>Feedback & Bugmeldung (lokal)</h2>
    <form @submit.prevent="submit" novalidate>
      <input v-model="honeypot" name="website" class="hp" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">

      <label> Kategorie *
        <select v-model="form.category" required>
          <option disabled value="">Bitte wählen</option>
          <option>Bug</option><option>Idee/Feature</option><option>Inhalt/Korrektur</option><option>Sonstiges</option>
        </select>
      </label>

      <label> Nachricht *
        <textarea v-model="form.message" rows="6" required placeholder="Was ist passiert?"></textarea>
      </label>

      <label> Name
        <input v-model="form.name" type="text" placeholder="Optional">
      </label>

      <label> E-Mail
        <input v-model="form.email" type="email" placeholder="Optional (für Rückfragen)">
      </label>

      <label> Betroffene Seite/URL
        <input v-model="form.page" type="url" :placeholder="currentUrl">
      </label>

      <div class="actions">
        <button :disabled="loading">{{ loading ? "Sende…" : "Feedback senden" }}</button>
        <span v-if="error" class="error">{{ error }}</span>
        <span v-if="success" class="success">Danke! Gespeichert.</span>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const API = "http://localhost:3000/api/feedback";

const form = ref({ category:"", message:"", name:"", email:"", page:"" });
const loading = ref(false);
const error = ref("");
const success = ref(false);
const honeypot = ref("");
const currentUrl = ref("");

onMounted(() => {
  currentUrl.value = window.location.href;
  if (!form.value.page) form.value.page = currentUrl.value;
});

async function submit() {
  error.value = ""; success.value = false;
  if (!form.value.category || !form.value.message) {
    error.value = "Bitte Kategorie und Nachricht ausfüllen."; return;
  }
  loading.value = true;
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form.value, website: honeypot.value })
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "Fehler");
    success.value = true;
    form.value.message = "";
  } catch (e) {
    console.error(e);
    error.value = "Senden nicht möglich.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.wrap { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:20px; }
label { display:block; margin:10px 0; font-weight:600; }
input,select,textarea { width:100%; margin-top:6px; padding:10px; border:1px solid #d1d5db; border-radius:8px; font:inherit; }
.actions { margin-top:10px; }
button { padding:10px 16px; border-radius:10px; border:1px solid #2563eb; background:#2563eb; color:#fff; }
.error { color:#b91c1c; margin-left:10px; }
.success { color:#1b7f2a; margin-left:10px; }
.hp { position:absolute; left:-9999px; top:-9999px; opacity:0; height:0; width:0; }
</style>