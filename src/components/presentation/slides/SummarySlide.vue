<template>
  <div class="slide summary-slide">
    <div class="summary-slide__header">
      <span class="summary-slide__badge">📋 Cierre de lección</span>
      <h2 class="summary-slide__title">{{ slide.title || 'Lo que debes recordar' }}</h2>
    </div>

    <div class="summary-slide__content">
      <LessonSummary
        :title="slide.summaryTitle || 'Puntos clave de la clase'"
        :points="slide.points"
      />
    </div>
  </div>
</template>

<script setup>
import LessonSummary from '../../educational/LessonSummary.vue'

defineProps({
  slide: { type: Object, required: true },
})
</script>

<style scoped>
.summary-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-6) var(--space-8);
  justify-content: center;
}

.summary-slide__header {
  margin-bottom: var(--space-4);
  text-align: center;
}

.summary-slide__badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  background: var(--color-primary-50);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-bottom: var(--space-2);
}

.summary-slide__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.summary-slide__content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
</style>
