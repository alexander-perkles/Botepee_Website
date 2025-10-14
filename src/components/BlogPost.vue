<template>
  <article v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <small>{{ post.date }} • {{ (post.tags || []).join(", ") }}</small>
    <div class="content" v-html="post.contentHtml"></div>

    <p class="back">
      <router-link to="/blog">← Zurück zur Übersicht</router-link>
    </p>
  </article>

  <section v-else class="post">
    <h2>Beitrag nicht gefunden</h2>
    <p>Der angeforderte Beitrag existiert nicht (Slug falsch oder Datei fehlt).</p>
    <p class="back"><router-link to="/blog">← Zurück zur Übersicht</router-link></p>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getPostBySlug } from "../blog/data/data";
import { computed, onMounted } from "vue";

const route = useRoute();
const post = computed(() => getPostBySlug(route.params.slug));

onMounted(() => {
  if (post.value?.title) {
    document.title = `${post.value.title} – Botépée Blog`;
  }
});
</script>

<style scoped>
.post { background:#fff; border-radius:12px; padding:20px; border:1px solid #e5e7eb; }
.content :is(h2,h3) { margin-top:1.2rem; }
.content img { max-width:100%; border-radius:8px; }
.back { margin-top:16px; }
</style>