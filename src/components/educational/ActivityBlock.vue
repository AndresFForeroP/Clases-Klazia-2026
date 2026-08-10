<template>
  <section class="activity" aria-labelledby="activity-title">
    <div class="activity__header">
      <span v-if="icon" class="activity__icon" aria-hidden="true">{{ icon }}</span>
      <div>
        <h3 id="activity-title" class="activity__title">{{ title }}</h3>
        <p class="activity__instructions">{{ instructions }}</p>
      </div>
    </div>

    <ol class="activity__steps">
      <li v-for="(step, index) in steps" :key="index" class="activity__step">
        <span class="activity__step-number">{{ index + 1 }}</span>
        <span class="activity__step-text">{{ step }}</span>
      </li>
    </ol>

    <div v-if="tip" class="activity__tip">
      <span class="activity__tip-icon" aria-hidden="true">💡</span>
      <p class="activity__tip-text">{{ tip }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  instructions: { type: String, required: true },
  steps: { type: Array, required: true },
  tip: { type: String, default: '' },
})
</script>

<style scoped>
.activity {
  background: var(--color-surface);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.activity__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.activity__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.activity__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.activity__instructions {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.activity__steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.activity__step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.activity__step-number {
  width: 28px;
  height: 28px;
  background: var(--color-accent);
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.activity__step-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  padding-top: 2px;
}

.activity__tip {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  background: var(--color-warning-light);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
}

.activity__tip-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.activity__tip-text {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}
</style>
