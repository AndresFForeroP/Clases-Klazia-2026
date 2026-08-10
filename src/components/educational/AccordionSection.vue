<template>
  <section class="accordion" aria-labelledby="accordion-title">
    <h3 id="accordion-title" class="accordion__title">{{ title }}</h3>

    <div class="accordion__items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion__item"
        :class="{ 'accordion__item--open': openIndex === index }"
      >
        <button
          class="accordion__trigger"
          :aria-expanded="openIndex === index"
          :aria-controls="`accordion-panel-${index}`"
          @click="toggle(index)"
        >
          <div class="accordion__trigger-content">
            <span class="accordion__trigger-title">{{ item.title }}</span>
            <span v-if="item.subtitle" class="accordion__trigger-subtitle">{{ item.subtitle }}</span>
          </div>
          <span class="accordion__trigger-icon" aria-hidden="true">
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>

        <div
          v-show="openIndex === index"
          :id="`accordion-panel-${index}`"
          class="accordion__panel"
          role="region"
        >
          <div class="accordion__panel-content">
            <p class="accordion__text" v-html="renderMarkdown(item.content)"></p>

            <div v-if="item.analogy" class="accordion__analogy">
              <p v-html="renderMarkdown(item.analogy)"></p>
            </div>

            <ul v-if="item.characteristics" class="accordion__characteristics">
              <li v-for="(char, ci) in item.characteristics" :key="ci">{{ char }}</li>
            </ul>

            <div v-if="item.example" class="accordion__example">
              <span class="accordion__example-label">Ejemplo:</span>
              {{ item.example }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.accordion__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.accordion__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.accordion__item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.accordion__item--open {
  border-color: var(--color-primary-200);
  box-shadow: var(--shadow-md);
}

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-5);
  background: var(--color-surface);
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background var(--transition-fast);
}

.accordion__trigger:hover {
  background: var(--color-surface-hover);
}

.accordion__item--open .accordion__trigger {
  background: var(--color-primary-50);
}

.accordion__trigger-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.accordion__trigger-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.accordion__trigger-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.accordion__trigger-icon {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-base);
}

.accordion__panel {
  animation: fadeIn 0.3s ease-out;
}

.accordion__panel-content {
  padding: 0 var(--space-5) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.accordion__text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

.accordion__text :deep(strong) {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.accordion__analogy {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.06) 0%, rgba(79, 70, 229, 0.06) 100%);
  border-left: 3px solid var(--color-accent);
  padding: var(--space-4);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.accordion__analogy :deep(strong) {
  color: var(--color-accent-dark);
}

.accordion__characteristics {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-left: var(--space-4);
}

.accordion__characteristics li {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  position: relative;
  padding-left: var(--space-4);
}

.accordion__characteristics li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

.accordion__example {
  background: var(--color-bg-secondary);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.accordion__example-label {
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-right: var(--space-1);
}
</style>
