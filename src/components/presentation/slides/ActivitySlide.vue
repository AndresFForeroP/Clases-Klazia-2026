<template>
  <div class="slide activity-slide">
    <div class="activity-slide__header">
      <span class="activity-slide__badge">🚀 Actividad Práctica</span>
      <h2 class="activity-slide__title">{{ slide.title }}</h2>
    </div>

    <div class="activity-slide__content">
      <ActivityBlock
        :title="slide.activityTitle || slide.title"
        :icon="slide.icon || '🔎'"
        :instructions="slide.instructions"
        :steps="slide.steps"
        :tip="slide.tip || ''"
      />
    </div>
  </div>
</template>

<script setup>
import ActivityBlock from '../../educational/ActivityBlock.vue'

defineProps({
  slide: { type: Object, required: true },
})
</script>

<style scoped>
.activity-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-4) var(--space-8);
  justify-content: center;
}

.activity-slide__header {
  margin-bottom: var(--space-4);
}

.activity-slide__badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-dark);
  background: rgba(6, 182, 212, 0.1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-bottom: var(--space-2);
}

.activity-slide__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.activity-slide__content {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
</style>
