<template>
  <section class="faq">
    <h2>{{ tt("faq.h2") }}</h2>
    <p class="intro">{{ tt("faq.intro") }}</p>

    <div class="faq-group">
      <h3>{{ tt("faq.group.general") }}</h3>
      <details v-for="item in faqs.general" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>{{ tt("faq.group.tech") }}</h3>
      <details v-for="item in faqs.tech" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>{{ tt("faq.group.web") }}</h3>
      <details v-for="item in faqs.web" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>{{ tt("faq.group.sponsor") }}</h3>
      <details v-for="item in faqs.sponsor" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "../composables/useI18n";
const { tt, lang } = useI18n();
const source = {
  general: [
    {
      q: { de: "Was ist Botépée?", en: "What is Botépée?" },
      a: {
        de: "Botépée ist ein Fechttrainingsroboter für realistische Übungsszenarien. Er hängt an der Wand und besitzt einen beweglichen Arm und ein bewegliches Bein.",
        en: "Botépée is a fencing training robot for realistic practice scenarios. It mounts to the wall and features a movable arm and a movable leg."
      }
    },
    {
      q: { de: "Für wen ist Botépée gedacht?", en: "Who is Botépée for?" },
      a: {
        de: "Für Fechtvereine, Trainer:innen, Leistungssportler:innen sowie Bildungseinrichtungen, die realistische Drills trainieren möchten.",
        en: "For fencing clubs, coaches, competitive athletes, and educational institutions that want to train realistic drills."
      }
    },
    {
      q: { de: "Warum an der Wand montiert?", en: "Why wall-mounted?" },
      a: {
        de: "Durch die Wandmontage bleibt das Setup kompakt und sicher. Botépée ist als Rechtshänder ausgelegt; die flache Rückseite ermöglicht die Montage.",
        en: "Wall mounting keeps the setup compact and safe. Botépée is designed as a right-handed fencer; the flat back enables mounting."
      }
    }
  ],
  tech: [
    {
      q: { de: "Welche Bewegungen kann der Roboter ausführen?", en: "Which movements can the robot perform?" },
      a: {
        de: "Der Arm kann stoßen und den Unterarm drehen; das Bein kann Schritt bzw. Ausfall simulieren.",
        en: "The arm can thrust and rotate the forearm; the leg can simulate a step or lunge."
      }
    },
    {
      q: { de: "Wie wird gesteuert?", en: "How is it controlled?" },
      a: {
        de: "Per Mikrocontroller (z. B. Arduino/ESP32) und Fernbedienung (Bluetooth/WLAN). Mindestens drei vordefinierte Aktionen lassen sich auswählen.",
        en: "Via microcontroller (e.g., Arduino/ESP32) and remote (Bluetooth/Wi-Fi). At least three predefined actions can be selected."
      }
    },
    {
      q: { de: "Wie robust ist das System?", en: "How robust is the system?" },
      a: {
        de: "Ziel: Auslegung auf Stoßkräfte bis ca. 800 N an kritischen Stellen.",
        en: "Target: designed to withstand impact forces up to ~800 N at critical points."
      }
    },
    {
      q: { de: "Welche Fechtausrüstung wird verwendet?", en: "Which fencing equipment is used?" },
      a: {
        de: "Echte Fechtausrüstung (Maske, Jacke, Hose). Komponenten sind austauschbar.",
        en: "Real fencing gear (mask, jacket, trousers). Components are replaceable."
      }
    }
  ],
  web: [
    {
      q: { de: "Gibt es eine englische Version der Website?", en: "Is there an English version of the website?" },
      a: {
        de: "Geplant als optionales Ziel. Wenn genug Zeit bleibt, wird eine EN-Version ergänzt.",
        en: "Planned as an optional goal. If time permits, an English version will be added."
      }
    },
    {
      q: { de: "Wo finde ich Medien (Bilder/Videos)?", en: "Where can I find media (images/videos)?" },
      a: {
        de: "Auf der Website unter <em>Startseite</em> und künftig im Medienbereich.",
        en: "On the website under <em>Home</em> and, in the future, in a dedicated media section."
      }
    }
  ],
  sponsor: [
    {
      q: { de: "Wie kann man das Projekt unterstützen?", en: "How can the project be supported?" },
      a: {
        de: "Sponsoring (Sach- oder Geldspenden) ist möglich – z. B. für Elektronik, Mechanik oder Fechtausrüstung. Kontakt: siehe <em>Kontakt</em>-Seite.",
        en: "Sponsorship (in-kind or financial) is possible—for example for electronics, mechanics, or fencing gear. See the <em>Contact</em> page."
      }
    },
    {
      q: { de: "Welche Gegenleistungen gibt es für Sponsoren?", en: "What benefits do sponsors receive?" },
      a: {
        de: "Logo-Präsenz auf Website/Print/Video, Erwähnungen auf Social Media und Sichtbarkeit bei Präsentationen/Events.",
        en: "Logo placement on website/print/video, mentions on social media, and visibility at presentations/events."
      }
    }
  ]
};

/**
 * Abgeleitete, sprachspezifische Ansicht der Daten
 */
const faqs = computed(() => {
  const L = lang.value;
  const pick = (item) => ({ q: item.q[L] || item.q.de, a: item.a[L] || item.a.de });
  return {
    general: source.general.map(pick),
    tech: source.tech.map(pick),
    web: source.web.map(pick),
    sponsor: source.sponsor.map(pick)
  };
});
</script>

<style scoped>
@import "../styles/faq.css";
</style>