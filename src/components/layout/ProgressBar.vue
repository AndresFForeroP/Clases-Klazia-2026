<template>
  <div class="progress-bar" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar__track">
      <div class="progress-bar__fill" :style="{ width: percentage + '%' }"></div>
    </div>
    <span v-if="showLabel" class="progress-bar__label">{{ percentage }}%</span>
  </div>
</template>

<script setup>
defineProps({
  percentage: { type: Number, default: 0 },
  showLabel: { type: Boolean, default: true },
})
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.progress-bar__track {
  flex: 1;
  height: 6px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: var(--gradient-success);
  border-radius: var(--radius-full);
  transition: width 0.5s ease-out;
  min-width: 0;
}

.progress-bar__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  min-width: 36px;
  text-align: right;
}
</style>
