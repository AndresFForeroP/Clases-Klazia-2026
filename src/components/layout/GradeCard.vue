<template>
  <router-link
    :to="`/grado/${grade.number}`"
    class="grade-card card card--interactive"
    :class="[`grade-card--${grade.number}`, { 'grade-card--has-courses': hasAvailableCourses }]"
    :aria-label="`${grade.label} grado — ${hasAvailableCourses ? 'Cursos disponibles' : 'Próximamente'}`"
  >
    <div class="grade-card__icon" aria-hidden="true">{{ grade.icon }}</div>
    <div class="grade-card__content">
      <h3 class="grade-card__label">{{ grade.label }}</h3>
      <p class="grade-card__sublabel">{{ grade.sublabel }}</p>
    </div>
    <span v-if="hasAvailableCourses" class="badge badge--available">
      <span class="badge__dot badge__dot--active" aria-hidden="true"></span>
      Disponible
    </span>
    <span v-else class="badge badge--coming">Próximamente</span>
    <div class="grade-card__arrow" aria-hidden="true">→</div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { getGroupsByGrade } from '../../data/courseData.js'

const props = defineProps({
  grade: {
    type: Object,
    required: true,
  },
})

const hasAvailableCourses = computed(() => {
  const groups = getGroupsByGrade(props.grade.number)
  return groups.some(g => g.available)
})
</script>

<style scoped>
.grade-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.grade-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.grade-card:hover::before {
  opacity: 1;
}

.grade-card__icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-spring);
}

.grade-card:hover .grade-card__icon {
  transform: scale(1.08);
}

.grade-card__content {
  flex: 1;
  min-width: 0;
}

.grade-card__label {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.grade-card__sublabel {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.grade-card__arrow {
  font-size: var(--font-size-lg);
  color: var(--color-text-tertiary);
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.grade-card:hover .grade-card__arrow {
  color: var(--color-primary);
  transform: translateX(4px);
}

.badge__dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.badge__dot--active {
  background: var(--color-success);
  animation: pulse 2s infinite;
}

@media (max-width: 480px) {
  .grade-card {
    padding: var(--space-4);
    gap: var(--space-3);
  }

  .grade-card__icon {
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
  }
}
</style>
