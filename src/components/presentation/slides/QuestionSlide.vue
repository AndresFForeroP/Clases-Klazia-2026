<template>
  <div class="slide question-slide">
    <div class="question-slide__badge">
      <span>💬 Pregunta para la clase</span>
    </div>

    <h2 class="question-slide__question">{{ slide.question }}</h2>
    <p v-if="slide.context" class="question-slide__context">{{ slide.context }}</p>

    <!-- Opciones / Pistas de discusión si existen -->
    <div v-if="slide.options && slide.options.length" class="question-slide__options">
      <div v-for="(opt, idx) in slide.options" :key="idx" class="question-slide__option-card">
        <span class="question-slide__option-letter">{{ String.fromCharCode(65 + idx) }}</span>
        <span class="question-slide__option-text">{{ opt }}</span>
      </div>
    </div>

    <!-- Botón para revelar respuesta -->
    <div class="question-slide__actions">
      <button
        v-if="!revealed"
        class="btn btn--primary btn--lg"
        @click="revealed = true"
      >
        👁️ Revelar respuesta y explicación
      </button>

      <button
        v-else
        class="btn btn--ghost btn--sm"
        @click="revealed = false"
      >
        Ocultar respuesta
      </button>
    </div>

    <!-- Respuesta revelada -->
    <div v-if="revealed" class="question-slide__answer animate-fade-in-up">
      <div class="question-slide__answer-header">
        <span class="question-slide__answer-icon">✓</span>
        <h4 class="question-slide__answer-title">Respuesta esperada:</h4>
      </div>
      <p class="question-slide__answer-text" v-html="renderMarkdown(slide.answer)"></p>

      <div v-if="slide.explanation" class="question-slide__explanation">
        <span class="question-slide__explanation-label">¿Por qué?</span>
        <p v-html="renderMarkdown(slide.explanation)"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  slide: { type: Object, required: true },
})

const revealed = ref(false)

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.question-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: var(--space-6) var(--space-8);
}

.question-slide__badge {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background: var(--color-warning-light);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: var(--color-warning-dark);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-6);
}

.question-slide__question {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  max-width: 850px;
  margin-bottom: var(--space-4);
}

.question-slide__context {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 650px;
  margin-bottom: var(--space-6);
}

.question-slide__options {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
  max-width: 700px;
  margin-bottom: var(--space-6);
}

.question-slide__option-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-5);
  font-size: var(--font-size-base);
}

.question-slide__option-letter {
  width: 28px;
  height: 28px;
  background: var(--color-primary-50);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
}

.question-slide__actions {
  margin-top: var(--space-2);
  margin-bottom: var(--space-4);
}

.question-slide__answer {
  background: var(--color-success-light);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  max-width: 750px;
  text-align: left;
  box-shadow: var(--shadow-md);
}

.question-slide__answer-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.question-slide__answer-icon {
  width: 24px;
  height: 24px;
  background: var(--color-success);
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
}

.question-slide__answer-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-success-dark);
}

.question-slide__answer-text {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}

.question-slide__explanation {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px dashed rgba(16, 185, 129, 0.3);
}

.question-slide__explanation-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-success-dark);
  display: block;
}

.question-slide__explanation p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
</style>
