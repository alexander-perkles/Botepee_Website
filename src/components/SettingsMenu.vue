<template>
  <div class="settings">
    <details ref="popover">
      <summary aria-label="Sprache wählen" title="Sprache">
        🌐
      </summary>

      <div class="panel" role="menu" @click.stop>
        <div class="panel-title">{{ title }}</div>
        <div class="segmented">
          <button
            :class="{ active: lang.value === 'de' }"
            @click="set('de')"
            role="menuitemradio"
            aria-checked="lang.value === 'de'"
          >
            DE
          </button>
          <button
            :class="{ active: lang.value === 'en' }"
            @click="set('en')"
            role="menuitemradio"
            aria-checked="lang.value === 'en'"
          >
            EN
          </button>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useSettings } from "../composables/useSettings";
import { t } from "../i18n/i18n";

const { lang } = useSettings();
const title = computed(() => t(lang.value, "settings.title"));
const popover = ref(null);

function set(code) {
  lang.value = code;
  // Popover schließen
  if (popover.value) popover.value.removeAttribute("open");
}

// Klick außerhalb schließt das Popover
function onDocClick(e) {
  if (!popover.value) return;
  if (!popover.value.contains(e.target)) {
    popover.value.removeAttribute("open");
  }
}
onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
</script>

<style scoped>
@import "../styles/settings-menu.css";
</style>