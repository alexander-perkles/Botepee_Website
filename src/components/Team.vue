<template>
  <section>
    <h2>{{ tt("team.h2.team") }}</h2>
    <ul>
      <li><strong>Denis Kominlija</strong> – Projektleiter (Programmierung, Mikrocontroller, Bein)</li>
      <li><strong>Alexander Perkles</strong> – Stv. Projektleiter (Medientechnik, Website, Marketing)</li>
      <li><strong>Fedor Abramov</strong> – Projektmitarbeiter (Mechanik, Arm, Ausrüstung)</li>
    </ul>

    <h2>{{ tt("team.h2.supervision") }}</h2>
    <ul>
      <li>Martin Sommer (Hauptbetreuer)</li>
      <li>Franz Temper (Stv. Hauptbetreuer)</li>
      <li>Gerhard Sturm (Individualbetreuer)</li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { tt } = useI18n();
</script>
