<template>
  <section>
    <h2>{{ tt("blog.h2") }}</h2>
    <p class="muted">{{ tt("blog.subtitle") }}</p>

    <article v-for="p in posts" :key="p.slug" class="card">
      <h3>
        <router-link :to="`/blog/${p.slug}`">{{ p.title }}</router-link>
      </h3>
      <small>{{ p.date }} • {{ (p.tags || []).join(", ") }}</small>
      <p>{{ p.excerpt }}</p>
    </article>

    <p v-if="!posts.length" class="muted">{{ tt("blog.empty") }}</p>
  </section>
</template>

<script setup>
import { getAllPosts } from "../blog/data/data";
import { useI18n } from "../composables/useI18n";
import "../styles/blog-list.css";
const posts = getAllPosts();
const { tt } = useI18n();
</script>