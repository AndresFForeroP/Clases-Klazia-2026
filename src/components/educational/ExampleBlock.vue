<template>
  <section class="example-block">
    <div class="example-block__header">
      <span v-if="icon" class="example-block__icon" aria-hidden="true">{{ icon }}</span>
      <h3 class="example-block__title">{{ title }}</h3>
    </div>
    <div class="example-block__grid">
      <div
        v-for="(example, index) in examples"
        :key="index"
        class="example-block__item"
      >
        <h4 class="example-block__item-name">{{ example.name }}</h4>
        <p class="example-block__item-desc">{{ example.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  examples: { type: Array, required: true },
})
</script>

<style scoped>
.example-block {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.example-block__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.example-block__icon {
  font-size: 1.5rem;
}

.example-block__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.example-block__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);
}

.example-block__item {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.example-block__item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.example-block__item-name {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.example-block__item-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
</style>
