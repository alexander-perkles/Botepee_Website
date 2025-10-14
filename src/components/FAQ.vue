<template>
  <section class="faq">
    <h2>FAQ – Häufige Fragen</h2>
    <p class="intro">
      Hier beantworten wir die häufigsten Fragen rund um Botépée.
    </p>

    <div class="faq-group">
      <h3>Allgemein</h3>
      <details v-for="item in faqs.general" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>Technik</h3>
      <details v-for="item in faqs.tech" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>Website & Medien</h3>
      <details v-for="item in faqs.web" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>

    <div class="faq-group">
      <h3>Sponsoring</h3>
      <details v-for="item in faqs.sponsor" :key="item.q">
        <summary>{{ item.q }}</summary>
        <div class="answer" v-html="item.a"></div>
      </details>
    </div>
  </section>
</template>

<script setup>
const faqs = {
  // Alle FAQs
  general: [
    {
      q: "Was ist Botépée?",
      a: "Botépée ist ein Fechttrainingsroboter für realistische Übungsszenarien. Er hängt an der Wand und besitzt einen beweglichen Arm und ein bewegliches Bein."
    },
    {
      q: "Für wen ist Botépée gedacht?",
      a: "Für Fechtvereine, Trainer:innen, Leistungssportler:innen sowie Bildungseinrichtungen, die realistische Drills trainieren möchten."
    },
    {
      q: "Warum an der Wand montiert?",
      a: "Durch die Wandmontage bleibt das Setup kompakt und sicher. Botépée ist als Rechtshänder ausgelegt; die flache Rückseite ermöglicht die Montage."
    }
  ],
  tech: [
    {
      q: "Welche Bewegungen kann der Roboter ausführen?",
      a: "Der Arm kann stoßen und den Unterarm drehen; das Bein kann Schritt bzw. Ausfall simulieren."
    },
    {
      q: "Wie wird gesteuert?",
      a: "Per Mikrocontroller (z. B. Arduino/ESP32) und Fernbedienung (Bluetooth/WLAN). Mindestens drei vordefinierte Aktionen lassen sich auswählen."
    },
    {
      q: "Wie robust ist das System?",
      a: "Ziel: Auslegung auf Stoßkräfte bis ca. 800 N an kritischen Stellen."
    },
    {
      q: "Welche Fechtausrüstung wird verwendet?",
      a: "Echte Fechtausrüstung (Maske, Jacke, Hose). Komponenten sind austauschbar."
    }
  ],
  web: [
    {
      q: "Gibt es eine englische Version der Website?",
      a: "Geplant als optionales Ziel. Wenn genug Zeit bleibt, wird eine EN-Version ergänzt."
    },
    {
      q: "Wo finde ich Medien (Bilder/Videos)?",
      a: "Auf der Website unter <em>Startseite</em> und künftig im Medienbereich."
    }
  ],
  sponsor: [
    {
      q: "Wie kann man das Projekt unterstützen?",
      a: "Sponsoring (Sach- oder Geldspenden) ist möglich – z. B. für Elektronik, Mechanik oder Fechtausrüstung. Kontakt: siehe <em>Kontakt</em>-Seite."
    },
    {
      q: "Welche Gegenleistungen gibt es für Sponsoren?",
      a: "Logo-Präsenz auf Website/Print/Video, Erwähnungen auf Social Media und Sichtbarkeit bei Präsentationen/Events."
    }
  ]
};
</script>

<style scoped>
.faq {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.intro {
  margin-top: -4px;
  color: #555;
}

.faq-group { margin-top: 24px; }
.faq-group h3 { margin: 16px 0 8px; }

details {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
}

summary {
  cursor: pointer;
  list-style: none;
  padding: 12px 14px;
  font-weight: 600;
  color: #222;
}

summary::-webkit-details-marker { display: none; }

details[open] summary {
  border-bottom: 1px solid #e5e7eb;
}

.answer {
  padding: 12px 14px;
  color: #333;
  line-height: 1.5;
}


summary:focus {
  outline: 2px solid #0077cc;
  outline-offset: 2px;
  border-radius: 6px;
}
</style>
