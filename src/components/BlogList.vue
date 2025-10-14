<template>
  <section>
    <h2>Blog</h2>
    <p class="muted">Neuigkeiten aus dem Botépée-Projekt.</p>

    <article v-for="p in posts" :key="p.slug" class="card">
      <h3>
        <router-link :to="`/blog/${p.slug}`">{{ p.title }}</router-link>
      </h3>
      <small>{{ p.date }} • {{ (p.tags || []).join(", ") }}</small>
      <p>{{ p.excerpt }}</p>
    </article>

    <p v-if="!posts.length" class="muted">Noch keine Beiträge vorhanden.</p>
  </section>
</template>

<script setup>
import { getAllPosts } from "../blog/data/data";
const posts = getAllPosts();
</script>

<style scoped>
.muted { color:#666; margin-top:-6px; }
.card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:14px; margin:10px 0; }
h3 { margin:6px 0 2px; }
</style>