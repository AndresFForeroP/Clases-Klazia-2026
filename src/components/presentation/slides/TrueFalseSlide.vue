<template>
  <div class="slide tf-slide">
    <div class="tf-slide__header">
      <span class="tf-slide__badge">⚖️ Verdadero o Falso</span>
      <h2 class="tf-slide__title">{{ slide.title }}</h2>
    </div>

    <div class="tf-slide__content">
      <TrueFalse
        :title="slide.tfTitle || 'Evalúa cada afirmación'"
        :description="slide.tfDescription || ''"
        :statements="slide.statements"
      />
    </div>
  </div>
</template>

<script setup>
import TrueFalse from '../../educational/TrueFalse.vue'

defineProps({
  slide: { type: Object, required: true },
})
</script>

<style scoped>
.tf-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-4) var(--space-8);
  justify-content: center;
}

.tf-slide__header {
  margin-bottom: var(--space-4);
}

.tf-slide__badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-info);
  background: var(--color-info-light);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-bottom: var(--space-2);
}

.tf-slide__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.tf-slide__content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
</style>
