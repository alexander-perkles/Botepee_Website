<template>
  <article v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <small>{{ post.date }} • {{ (post.tags || []).join(", ") }}</small>
    <div class="content" v-html="post.contentHtml"></div>

    <p class="back">
      <router-link to="/blog">{{ tt("blog.back") }}</router-link>
    </p>
  </article>

  <section v-else class="post">
    <h2>{{ tt("faq.notfound.h2") }}</h2>
    <p>{{ tt("faq.notfound.p") }}</p>
    <p class="back"><router-link to="/blog">{{ tt("blog.back") }}</router-link></p>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getPostBySlug } from "../blog/data/data";
import { computed, onMounted } from "vue";
import { useI18n } from "../composables/useI18n";
import "../styles/blog-post.css";

const { tt } = useI18n();
const route = useRoute();
const post = computed(() => getPostBySlug(route.params.slug));

onMounted(() => {
  if (post.value?.title) {
    document.title = `${post.value.title} – Botépée Blog`;
  }
});
</script>