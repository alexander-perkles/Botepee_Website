<template>
  <section>
    <h2>{{ tt("home.idea.h2") }}</h2>
    <p>{{ tt("home.idea.p") }}</p>

    <h2>{{ tt("home.why.h2") }}</h2>
    <p>{{ tt("home.why.p") }}</p>

    <h2>{{ tt("home.goals.h2") }}</h2>
    <ul>
      <li>{{ tt("home.goals.li1") }}</li>
      <li>{{ tt("home.goals.li2") }}</li>
      <li>{{ tt("home.goals.li3") }}</li>
      <li>{{ tt("home.goals.li4") }}</li>
      <li>{{ tt("home.goals.li5") }}</li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { tt } = useI18n();
</script>
