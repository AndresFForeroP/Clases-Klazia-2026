<template>
  <section class="concept-card" aria-labelledby="concept-title">
    <h3 id="concept-title" class="concept-card__title">{{ title }}</h3>

    <!-- Explicación sencilla -->
    <div class="concept-card__simple">
      <div class="concept-card__label">
        <span class="concept-card__label-icon" aria-hidden="true">💡</span>
        Explicación sencilla
      </div>
      <p class="concept-card__text" v-html="renderMarkdown(simpleExplanation)"></p>
    </div>

    <!-- Definición técnica -->
    <div class="concept-card__technical">
      <div class="concept-card__label">
        <span class="concept-card__label-icon" aria-hidden="true">📖</span>
        Definición
      </div>
      <p class="concept-card__text" v-html="renderMarkdown(technicalDefinition)"></p>
    </div>

    <!-- Puntos clave -->
    <div v-if="keyPoints && keyPoints.length" class="concept-card__points">
      <div class="concept-card__label">
        <span class="concept-card__label-icon" aria-hidden="true">📌</span>
        Puntos clave
      </div>
      <ul class="concept-card__points-list">
        <li v-for="(point, index) in keyPoints" :key="index" class="concept-card__point">
          {{ point }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  simpleExplanation: { type: String, required: true },
  technicalDefinition: { type: String, required: true },
  keyPoints: { type: Array, default: () => [] },
})

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.concept-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.concept-card__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.concept-card__simple,
.concept-card__technical,
.concept-card__points {
  padding: var(--space-5);
  border-radius: var(--radius-lg);
}

.concept-card__simple {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.06) 0%, rgba(79, 70, 229, 0.06) 100%);
  border: 1px solid rgba(6, 182, 212, 0.15);
}

.concept-card__technical {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
}

.concept-card__points {
  background: var(--color-surface);
}

.concept-card__label {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: var(--space-3);
}

.concept-card__label-icon {
  font-size: 1rem;
}

.concept-card__text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

.concept-card__text :deep(strong) {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.concept-card__points-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.concept-card__point {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  padding-left: var(--space-4);
  position: relative;
}

.concept-card__point::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

@media (max-width: 768px) {
  .concept-card {
    padding: var(--space-5);
  }
}
</style>
