// src/composables/useI18n.js
import { computed } from "vue";
import { useSettings } from "./useSettings";
import { messages } from "../i18n/i18n";

export function useI18n() {
  const { lang } = useSettings();
  const dict = computed(() => messages[lang.value] || messages.de);

  function tt(key) {
    return dict.value[key] ?? key;
  }

  return { tt, lang };
}