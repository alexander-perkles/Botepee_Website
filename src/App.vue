<template>
  <div id="app">
    <header class="site">
      <div class="container bar">
        <router-link to="/" class="brand" aria-label="Zur Startseite">
        <img src="../src/Logo1.png" alt="Botépée Logo" />
        <div class="title">{{ labels["site.title"] }}</div>
        </router-link>

        <nav class="primary">
          <router-link to="/">{{ labels["nav.home"] }}</router-link>
          <router-link to="/team">{{ labels["nav.team"] }}</router-link>
          <router-link to="/kontakt">{{ labels["nav.contact"] }}</router-link>
          <router-link to="/blog">{{ labels["nav.blog"] }}</router-link>
          <router-link to="/faq">{{ labels["nav.faq"] }}</router-link>
        </nav>

        <SettingsMenu />
      </div>
    </header>

    <main>
      <div class="container">
        <router-view />
      </div>
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2025 Botépée Projektteam</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import SettingsMenu from "./components/SettingsMenu.vue";
import { useSettings } from "./composables/useSettings";
import { messages } from "./i18n/i18n";
import "./styles/app.css";

const { lang } = useSettings();
const labels = computed(() => messages[lang.value] || messages.de);
watch(lang, () => { document.title = labels.value["site.title"]; }, { immediate: true });
</script>