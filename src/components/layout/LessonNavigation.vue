<template>
  <nav class="lesson-nav" aria-label="Navegación de secciones">
    <div class="lesson-nav__sidebar">
      <h4 class="lesson-nav__title">Secciones</h4>
      <ol class="lesson-nav__list">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="lesson-nav__item"
          :class="{ 'lesson-nav__item--active': index === currentIndex }"
        >
          <button
            class="lesson-nav__link"
            @click="$emit('navigate', index)"
            :aria-current="index === currentIndex ? 'step' : undefined"
          >
            <span class="lesson-nav__step">{{ index + 1 }}</span>
            <span class="lesson-nav__label">{{ section.title }}</span>
          </button>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  sections: { type: Array, required: true },
  currentIndex: { type: Number, default: 0 },
})

defineEmits(['navigate'])
</script>

<style scoped>
.lesson-nav__title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
}

.lesson-nav__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lesson-nav__link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

.lesson-nav__link:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text);
}

.lesson-nav__item--active .lesson-nav__link {
  background: var(--color-primary-50);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.lesson-nav__step {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.lesson-nav__item--active .lesson-nav__step {
  background: var(--color-primary);
  color: var(--color-text-on-primary);
}

.lesson-nav__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
