<template>
  <section class="quiz" aria-labelledby="quiz-title">
    <div class="quiz__header">
      <span class="quiz__icon" aria-hidden="true">📝</span>
      <div>
        <h3 id="quiz-title" class="quiz__title">{{ title }}</h3>
        <p v-if="description" class="quiz__description">{{ description }}</p>
      </div>
    </div>

    <!-- Progreso -->
    <div class="quiz__progress">
      <span class="quiz__progress-text">
        Pregunta {{ currentQuestionIndex + 1 }} de {{ questions.length }}
      </span>
      <div class="quiz__progress-bar">
        <div
          class="quiz__progress-fill"
          :style="{ width: ((currentQuestionIndex + 1) / questions.length * 100) + '%' }"
        ></div>
      </div>
    </div>

    <!-- Pregunta actual -->
    <div class="quiz__question-area">
      <p class="quiz__question-text">{{ currentQuestion.question }}</p>

      <div class="quiz__options" role="radiogroup" :aria-label="currentQuestion.question">
        <button
          v-for="(option, oIndex) in currentQuestion.options"
          :key="oIndex"
          class="quiz__option"
          :class="{
            'quiz__option--selected': selectedAnswer === oIndex,
            'quiz__option--correct': showFeedback && oIndex === currentQuestion.correctIndex,
            'quiz__option--incorrect': showFeedback && selectedAnswer === oIndex && oIndex !== currentQuestion.correctIndex,
          }"
          :disabled="showFeedback"
          @click="selectAnswer(oIndex)"
          role="radio"
          :aria-checked="selectedAnswer === oIndex"
        >
          <span class="quiz__option-letter">{{ String.fromCharCode(65 + oIndex) }}</span>
          <span class="quiz__option-text">{{ option }}</span>
          <span v-if="showFeedback && oIndex === currentQuestion.correctIndex" class="quiz__option-icon" aria-hidden="true">✓</span>
          <span v-if="showFeedback && selectedAnswer === oIndex && oIndex !== currentQuestion.correctIndex" class="quiz__option-icon" aria-hidden="true">✗</span>
        </button>
      </div>

      <!-- Botón de verificar -->
      <button
        v-if="selectedAnswer !== null && !showFeedback"
        class="btn btn--primary quiz__check-btn"
        @click="checkAnswer"
      >
        Verificar respuesta
      </button>

      <!-- Retroalimentación -->
      <div
        v-if="showFeedback"
        class="quiz__feedback"
        :class="isCorrect ? 'quiz__feedback--correct' : 'quiz__feedback--incorrect'"
        role="alert"
      >
        <div class="quiz__feedback-header">
          <span class="quiz__feedback-icon" aria-hidden="true">{{ isCorrect ? '🎉' : '💭' }}</span>
          <strong>{{ isCorrect ? '¡Correcto!' : 'No exactamente' }}</strong>
        </div>
        <p class="quiz__feedback-text" v-html="renderMarkdown(feedbackText)"></p>
      </div>

      <!-- Botón siguiente -->
      <button
        v-if="showFeedback"
        class="btn btn--primary quiz__next-btn"
        @click="nextQuestion"
      >
        {{ isLastQuestion ? 'Ver resultados' : 'Siguiente pregunta →' }}
      </button>
    </div>

    <!-- Resultados finales -->
    <div v-if="showResults" class="quiz__results">
      <div class="quiz__results-score">
        <span class="quiz__results-number">{{ score }}</span>
        <span class="quiz__results-total">/ {{ questions.length }}</span>
      </div>
      <p class="quiz__results-message">{{ resultMessage }}</p>
      <button class="btn btn--secondary" @click="resetQuiz">
        Intentar de nuevo
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  questions: { type: Array, required: true },
})

const currentQuestionIndex = ref(0)
const selectedAnswer = ref(null)
const showFeedback = ref(false)
const isCorrect = ref(false)
const score = ref(0)
const showResults = ref(false)

const currentQuestion = computed(() => props.questions[currentQuestionIndex.value])
const isLastQuestion = computed(() => currentQuestionIndex.value === props.questions.length - 1)

const feedbackText = computed(() => {
  if (!currentQuestion.value) return ''
  return isCorrect.value
    ? currentQuestion.value.feedback.correct
    : currentQuestion.value.feedback.incorrect
})

const resultMessage = computed(() => {
  const pct = (score.value / props.questions.length) * 100
  if (pct === 100) return '¡Excelente! Dominas completamente el tema. 🌟'
  if (pct >= 80) return '¡Muy bien! Tienes una comprensión sólida del tema.'
  if (pct >= 60) return 'Buen trabajo. Repasa los conceptos donde tuviste dificultad.'
  return 'Te recomendamos repasar el contenido y volver a intentarlo.'
})

function selectAnswer(index) {
  selectedAnswer.value = index
}

function checkAnswer() {
  isCorrect.value = selectedAnswer.value === currentQuestion.value.correctIndex
  if (isCorrect.value) score.value++
  showFeedback.value = true
}

function nextQuestion() {
  if (isLastQuestion.value) {
    showResults.value = true
    return
  }
  currentQuestionIndex.value++
  selectedAnswer.value = null
  showFeedback.value = false
  isCorrect.value = false
}

function resetQuiz() {
  currentQuestionIndex.value = 0
  selectedAnswer.value = null
  showFeedback.value = false
  isCorrect.value = false
  score.value = 0
  showResults.value = false
}

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.quiz {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.quiz__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.quiz__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.quiz__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.quiz__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.quiz__progress {
  margin-bottom: var(--space-6);
}

.quiz__progress-text {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  display: block;
  margin-bottom: var(--space-2);
}

.quiz__progress-bar {
  height: 4px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.quiz__progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  transition: width 0.4s ease-out;
}

.quiz__question-area {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.quiz__question-text {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  line-height: var(--line-height-relaxed);
}

.quiz__options {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.quiz__option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
  font-family: inherit;
  font-size: var(--font-size-base);
  width: 100%;
}

.quiz__option:hover:not(:disabled) {
  border-color: var(--color-primary-200);
  background: var(--color-primary-50);
}

.quiz__option--selected {
  border-color: var(--color-primary);
  background: var(--color-primary-50);
}

.quiz__option--correct {
  border-color: var(--color-success) !important;
  background: var(--color-success-light) !important;
}

.quiz__option--incorrect {
  border-color: var(--color-error) !important;
  background: var(--color-error-light) !important;
}

.quiz__option:disabled {
  cursor: default;
}

.quiz__option-letter {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.quiz__option--selected .quiz__option-letter {
  background: var(--color-primary);
  color: var(--color-text-on-primary);
}

.quiz__option--correct .quiz__option-letter {
  background: var(--color-success);
  color: white;
}

.quiz__option--incorrect .quiz__option-letter {
  background: var(--color-error);
  color: white;
}

.quiz__option-text {
  flex: 1;
  color: var(--color-text);
}

.quiz__option-icon {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.quiz__check-btn,
.quiz__next-btn {
  align-self: flex-start;
  margin-top: var(--space-2);
}

.quiz__feedback {
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  animation: fadeInUp 0.3s ease-out;
}

.quiz__feedback--correct {
  background: var(--color-success-light);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.quiz__feedback--incorrect {
  background: var(--color-warning-light);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.quiz__feedback-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
  font-size: var(--font-size-base);
}

.quiz__feedback-text {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

.quiz__feedback-text :deep(strong) {
  font-weight: var(--font-weight-semibold);
}

.quiz__results {
  text-align: center;
  padding: var(--space-8);
  animation: scaleIn 0.4s ease-out;
}

.quiz__results-score {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-1);
  margin-bottom: var(--space-4);
}

.quiz__results-number {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quiz__results-total {
  font-size: var(--font-size-2xl);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

.quiz__results-message {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .quiz {
    padding: var(--space-5);
  }
}
</style>
