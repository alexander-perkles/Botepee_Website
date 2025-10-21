<template>
  <div id="app">
    <header>
      <h1>{{ labels["site.title"] }}</h1>
      <nav>
        <router-link to="/">{{ labels["nav.home"] }}</router-link> |
        <router-link to="/team">{{ labels["nav.team"] }}</router-link> |
        <router-link to="/kontakt">{{ labels["nav.contact"] }}</router-link> |
        <router-link to="/blog">{{ labels["nav.blog"] }}</router-link> |
        <router-link to="/faq">{{ labels["nav.faq"] }}</router-link>
      </nav>
      <SettingsMenu />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Botépée Projektteam</p>
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

watch(lang, () => {
  document.title = labels.value["site.title"];
}, { immediate: true });
</script>