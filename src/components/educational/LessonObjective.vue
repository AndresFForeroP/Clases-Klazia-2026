<template>
  <section class="objective" aria-labelledby="objective-title">
    <div class="objective__icon" aria-hidden="true">🎯</div>
    <h3 id="objective-title" class="objective__title">{{ title }}</h3>
    <p class="objective__intro">Al finalizar esta clase podrás:</p>
    <ul class="objective__list">
      <li v-for="(obj, index) in objectives" :key="index" class="objective__item">
        <span class="objective__check" aria-hidden="true">✓</span>
        {{ obj }}
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Objetivo de aprendizaje' },
  objectives: { type: Array, required: true },
})
</script>

<style scoped>
.objective {
  background: var(--color-primary-50);
  border: 1px solid var(--color-primary-200);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  position: relative;
}

.objective__icon {
  font-size: 1.5rem;
  margin-bottom: var(--space-3);
}

.objective__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
  margin-bottom: var(--space-3);
}

.objective__intro {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.objective__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.objective__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-base);
  color: var(--color-text);
  line-height: var(--line-height-relaxed);
}

.objective__check {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
