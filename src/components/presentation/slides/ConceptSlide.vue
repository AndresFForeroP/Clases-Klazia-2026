<template>
  <div class="slide concept-slide">
    <div class="concept-slide__header">
      <span class="concept-slide__category" v-if="slide.category">{{ slide.category }}</span>
      <h2 class="concept-slide__title">{{ slide.title }}</h2>
    </div>

    <div class="concept-slide__body">
      <!-- Idea principal enfocada -->
      <div v-if="slide.mainIdea" class="concept-slide__hero-box">
        <span class="concept-slide__hero-icon" aria-hidden="true">💡</span>
        <p class="concept-slide__hero-text" v-html="renderMarkdown(slide.mainIdea)"></p>
      </div>

      <!-- Definición concisa -->
      <div v-if="slide.definition" class="concept-slide__definition-box">
        <span class="concept-slide__label">Definición clave:</span>
        <p v-html="renderMarkdown(slide.definition)"></p>
      </div>

      <!-- Analogía destacada si existe -->
      <div v-if="slide.analogy" class="concept-slide__analogy-box">
        <span class="concept-slide__label">✨ Analogía para entenderlo:</span>
        <p v-html="renderMarkdown(slide.analogy)"></p>
      </div>

      <!-- Puntos clave en cuadrícula/lista visual -->
      <div v-if="slide.keyPoints && slide.keyPoints.length" class="concept-slide__points-grid">
        <div v-for="(point, idx) in slide.keyPoints" :key="idx" class="concept-slide__point-card">
          <span class="concept-slide__point-num">{{ idx + 1 }}</span>
          <span class="concept-slide__point-text" v-html="renderMarkdown(point)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: { type: Object, required: true },
})

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.concept-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-6) var(--space-8);
  justify-content: center;
}

.concept-slide__header {
  margin-bottom: var(--space-6);
}

.concept-slide__category {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: var(--space-1);
}

.concept-slide__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
}

.concept-slide__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 900px;
}

.concept-slide__hero-box {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
}

.concept-slide__hero-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.concept-slide__hero-text {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}

.concept-slide__hero-text :deep(strong) {
  color: var(--color-primary-dark);
}

.concept-slide__definition-box,
.concept-slide__analogy-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
}

.concept-slide__analogy-box {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-color: rgba(6, 182, 212, 0.3);
}

.concept-slide__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: var(--space-1);
}

.concept-slide__definition-box p,
.concept-slide__analogy-box p {
  font-size: var(--font-size-base);
  color: var(--color-text);
  line-height: var(--line-height-relaxed);
}

.concept-slide__definition-box :deep(strong),
.concept-slide__analogy-box :deep(strong) {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.concept-slide__points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-3);
}

.concept-slide__point-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
}

.concept-slide__point-num {
  width: 24px;
  height: 24px;
  background: var(--color-primary-50);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xs);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.concept-slide__point-text {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  line-height: var(--line-height-normal);
}

.concept-slide__point-text :deep(strong) {
  color: var(--color-primary-dark);
}
</style>
