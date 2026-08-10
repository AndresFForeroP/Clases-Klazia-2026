<template>
  <div class="slide example-slide">
    <div class="example-slide__header">
      <span class="example-slide__badge" v-if="slide.category">{{ slide.category }}</span>
      <h2 class="example-slide__title">{{ slide.title }}</h2>
      <p v-if="slide.subtitle" class="example-slide__subtitle">{{ slide.subtitle }}</p>
    </div>

    <div class="example-slide__card">
      <div class="example-slide__main-info">
        <div class="example-slide__icon-box" v-if="slide.icon">
          <span>{{ slide.icon }}</span>
        </div>

        <div class="example-slide__text-content">
          <p class="example-slide__description" v-html="renderMarkdown(slide.description)"></p>

          <div v-if="slide.analogy || slide.interactionType" class="example-slide__highlight">
            <span class="example-slide__highlight-title">🔍 Clave pedagógica:</span>
            <p v-html="renderMarkdown(slide.analogy || slide.interactionType)"></p>
          </div>
        </div>
      </div>

      <!-- Puntos de características / análisis -->
      <div v-if="slide.features && slide.features.length" class="example-slide__features">
        <h4 class="example-slide__features-title">Características observables:</h4>
        <ul class="example-slide__features-list">
          <li v-for="(feat, idx) in slide.features" :key="idx">
            <span class="example-slide__bullet">▪</span>
            <span v-html="renderMarkdown(feat)"></span>
          </li>
        </ul>
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
.example-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-6) var(--space-8);
  justify-content: center;
}

.example-slide__header {
  margin-bottom: var(--space-6);
}

.example-slide__badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-dark);
  background: rgba(6, 182, 212, 0.1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-bottom: var(--space-2);
}

.example-slide__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
}

.example-slide__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  margin-top: var(--space-1);
}

.example-slide__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
  box-shadow: var(--shadow-md);
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.example-slide__main-info {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
}

.example-slide__icon-box {
  width: 64px;
  height: 64px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  flex-shrink: 0;
}

.example-slide__text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.example-slide__description {
  font-size: var(--font-size-base);
  color: var(--color-text);
  line-height: var(--line-height-relaxed);
}

.example-slide__description :deep(strong) {
  color: var(--color-primary-dark);
}

.example-slide__highlight {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  border-left: 3px solid var(--color-accent);
  padding: var(--space-3) var(--space-4);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.example-slide__highlight-title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-dark);
  display: block;
  margin-bottom: var(--space-1);
}

.example-slide__highlight p {
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.example-slide__features-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.example-slide__features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-2);
}

.example-slide__features-list li {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.example-slide__bullet {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}
</style>
