<template>
  <!-- Kontakt-Bereich -->
  <section>
    <h2>{{ tt("contact.h2") }}</h2>
    <p>{{ tt("contact.p") }}</p>
    <ul>
      <li>
        Denis Kominlija –
        <a href="mailto:1161@htl.rennweg.at">1161@htl.rennweg.at</a>
      </li>
      <li>
        Alexander Perkles –
        <a href="mailto:1142@htl.rennweg.at">1142@htl.rennweg.at</a>
      </li>
      <li>
        Fedor Abramov –
        <a href="mailto:1148@htl.rennweg.at">1148@htl.rennweg.at</a>
      </li>
    </ul>

    <p>
      {{ tt("contact.p2") }}
      <a href="tel:+436765113431">+43 676 5113431</a>
    </p>
  </section>

  <!-- Feedback-Bereich -->
  <section class="feedback-section">
    <h2>{{ tt("contact.feedback.h2") }}</h2>
    <p>{{ tt("contact.feedback.p") }}</p>

    <!-- Toggle-Button -->
    <button
      type="button"
      class="btn feedback-toggle"
      @click="toggleForm"
    >
      {{ showForm ? tt("contact.feedback.hide") : tt("contact.feedback.button") }}
    </button>

    <!-- Formular wird nur angezeigt, wenn showForm true ist -->
    <div v-if="showForm" class="feedback-form-wrapper">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScm4Pcn27J98eO104tL3cOTVWHqGv9iw_NPUgoXNyhkDMYa_w/viewform?embedded=true"
        width="100%"
        height="1205"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      >
        Wird geladen…
      </iframe>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "../composables/useI18n";

const { tt } = useI18n();

const showForm = ref(false);

function toggleForm() {
  showForm.value = !showForm.value;
}
</script>

<style scoped>
.feedback-section {
  margin-top: var(--space-6);
}

.feedback-toggle {
  margin-top: var(--space-2);
}

/* Wrapper um das Formular */
.feedback-form-wrapper {
  margin-top: var(--space-3);
}

.feedback-form-wrapper iframe {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  background: var(--panel);
}
</style>