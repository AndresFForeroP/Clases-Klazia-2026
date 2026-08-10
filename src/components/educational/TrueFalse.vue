<template>
  <section class="true-false" aria-labelledby="tf-title">
    <div class="true-false__header">
      <span class="true-false__icon" aria-hidden="true">⚖️</span>
      <div>
        <h3 id="tf-title" class="true-false__title">{{ title }}</h3>
        <p v-if="description" class="true-false__description">{{ description }}</p>
      </div>
    </div>

    <div class="true-false__statements">
      <div
        v-for="(item, index) in statements"
        :key="item.id"
        class="true-false__item"
        :class="{
          'true-false__item--answered': answers[index] !== undefined,
          'true-false__item--correct': answers[index] !== undefined && answers[index] === item.answer,
          'true-false__item--incorrect': answers[index] !== undefined && answers[index] !== item.answer,
        }"
      >
        <p class="true-false__statement">{{ item.statement }}</p>

        <div class="true-false__buttons" v-if="answers[index] === undefined">
          <button
            class="true-false__btn true-false__btn--true"
            @click="answer(index, true)"
            aria-label="Verdadero"
          >
            ✓ Verdadero
          </button>
          <button
            class="true-false__btn true-false__btn--false"
            @click="answer(index, false)"
            aria-label="Falso"
          >
            ✗ Falso
          </button>
        </div>

        <div v-else class="true-false__result" role="alert">
          <div class="true-false__result-badge" :class="answers[index] === item.answer ? 'true-false__result-badge--correct' : 'true-false__result-badge--incorrect'">
            {{ answers[index] === item.answer ? '¡Correcto!' : 'Incorrecto' }}
          </div>
          <p class="true-false__explanation" v-html="renderMarkdown(item.explanation)"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  statements: { type: Array, required: true },
})

const answers = reactive({})

function answer(index, value) {
  answers[index] = value
}

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.true-false {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.true-false__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.true-false__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.true-false__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.true-false__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.true-false__statements {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.true-false__item {
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.true-false__item--correct {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.04);
}

.true-false__item--incorrect {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.04);
}

.true-false__statement {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.true-false__buttons {
  display: flex;
  gap: var(--space-3);
}

.true-false__btn {
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 2px solid;
}

.true-false__btn--true {
  border-color: var(--color-success);
  color: var(--color-success-dark);
  background: transparent;
}

.true-false__btn--true:hover {
  background: var(--color-success-light);
}

.true-false__btn--false {
  border-color: var(--color-error);
  color: var(--color-error-dark);
  background: transparent;
}

.true-false__btn--false:hover {
  background: var(--color-error-light);
}

.true-false__result {
  animation: fadeInUp 0.3s ease-out;
}

.true-false__result-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-3);
}

.true-false__result-badge--correct {
  background: var(--color-success-light);
  color: var(--color-success-dark);
}

.true-false__result-badge--incorrect {
  background: var(--color-warning-light);
  color: var(--color-warning-dark);
}

.true-false__explanation {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.true-false__explanation :deep(strong) {
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
}

@media (max-width: 768px) {
  .true-false {
    padding: var(--space-5);
  }
}
</style>
