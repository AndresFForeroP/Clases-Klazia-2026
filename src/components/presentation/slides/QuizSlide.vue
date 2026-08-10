<template>
  <div class="slide quiz-slide">
    <div class="quiz-slide__header">
      <span class="quiz-slide__badge">📝 Cuestionario de comprobación</span>
      <h2 class="quiz-slide__title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="quiz-slide__desc">{{ slide.description }}</p>
    </div>

    <div class="quiz-slide__content">
      <InteractiveQuiz
        :title="slide.quizTitle || 'Pregunta de evaluación'"
        :description="slide.quizDescription || ''"
        :questions="slide.questions"
      />
    </div>
  </div>
</template>

<script setup>
import InteractiveQuiz from '../../educational/InteractiveQuiz.vue'

defineProps({
  slide: { type: Object, required: true },
})
</script>

<style scoped>
.quiz-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-4) var(--space-8);
  justify-content: center;
}

.quiz-slide__header {
  margin-bottom: var(--space-4);
}

.quiz-slide__badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  background: var(--color-primary-50);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-bottom: var(--space-2);
}

.quiz-slide__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.quiz-slide__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.quiz-slide__content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
</style>
