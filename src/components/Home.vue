<template>
  <section>
    <h2>{{ tt("home.idea.h2") }}</h2>
    <p>{{ tt("home.idea.p") }}</p>
    <p>{{ tt("home.why.p") }}</p>
    <br></br>

    <h2>{{ tt("home.goals.h2") }}</h2>
    <ul>
      <li>{{ tt("home.goals.li1") }}</li>
      <li>{{ tt("home.goals.li2") }}</li>
      <li>{{ tt("home.goals.li3") }}</li>
      <li>{{ tt("home.goals.li4") }}</li>
      <li>{{ tt("home.goals.li5") }}</li>
      <li>{{ tt("home.goals.li6") }}</li>
    </ul>
    <br></br>
    <h2>{{ tt("home.sponsors.h2") }}</h2>
<div class="sponsor-logos">
  <a
    href="https://www.extrudr.eu"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Extrudr Website"
  >
    <img src="../EX_Logo.png" alt="Extrudr Logo" />
  </a>

  <a
    href="https://happylab.at"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Happylab Website"
  >
    <img src="../HL_Logo.png" alt="Happylab Logo" />
  </a>
</div>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { tt } = useI18n();
</script>