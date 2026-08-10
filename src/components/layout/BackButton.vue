<template>
  <router-link :to="to" class="back-button btn btn--ghost" :aria-label="label">
    <span class="back-button__icon" aria-hidden="true">←</span>
    <span class="back-button__text">{{ label }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, default: 'Volver' },
})
</script>

<style scoped>
.back-button {
  text-decoration: none;
  margin-bottom: var(--space-6);
  display: inline-flex;
}

.back-button__icon {
  transition: transform var(--transition-base);
}

.back-button:hover .back-button__icon {
  transform: translateX(-3px);
}
</style>
