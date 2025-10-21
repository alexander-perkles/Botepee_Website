import { ref, watch, onMounted } from "vue";

const lang = ref("de");

export function useSettings() {
  onMounted(() => {
    const saved = JSON.parse(localStorage.getItem("settings") || "{}");
    if (saved.lang) lang.value = saved.lang;
  });

  watch(lang, () => {
    localStorage.setItem("settings", JSON.stringify({ lang: lang.value }));
  });

  return { lang };
}
