<template>
  <section class="summary" aria-labelledby="summary-title">
    <div class="summary__header">
      <span class="summary__icon" aria-hidden="true">📋</span>
      <h3 id="summary-title" class="summary__title">{{ title }}</h3>
    </div>
    <ul class="summary__list">
      <li v-for="(point, index) in points" :key="index" class="summary__item">
        <span class="summary__bullet" aria-hidden="true"></span>
        <span v-html="renderMarkdown(point)"></span>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Lo que debes recordar' },
  points: { type: Array, required: true },
})

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.summary {
  background: linear-gradient(135deg, var(--color-primary-50) 0%, rgba(6, 182, 212, 0.05) 100%);
  border: 1px solid var(--color-primary-200);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.summary__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.summary__icon {
  font-size: 1.5rem;
}

.summary__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
}

.summary__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.summary__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

.summary__item :deep(strong) {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.summary__bullet {
  width: 8px;
  height: 8px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  flex-shrink: 0;
  margin-top: 8px;
}
</style>
