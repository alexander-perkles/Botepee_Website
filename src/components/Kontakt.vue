<template>
  <section>
    <h2>{{ tt("contact.h2") }}</h2>
    <p>{{ tt("contact.p") }}</p>
    <ul>
      <li>Denis Kominlija – <a href="mailto:1161@htl.rennweg.at">1161@htl.rennweg.at</a></li>
      <li>Alexander Perkles – <a href="mailto:1142@htl.rennweg.at">1142@htl.rennweg.at</a></li>
      <li>Fedor Abramov – <a href="mailto:1148@htl.rennweg.at">1148@htl.rennweg.at</a></li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { tt } = useI18n();
</script>