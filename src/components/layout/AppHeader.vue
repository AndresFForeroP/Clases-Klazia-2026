<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__brand" aria-label="Ir al inicio">
        <span class="header__logo" aria-hidden="true">K</span>
        <span class="header__title">Klazia</span>
      </router-link>

      <nav class="header__breadcrumb" aria-label="Navegación" v-if="breadcrumbs.length > 0">
        <ol class="header__breadcrumb-list">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="header__breadcrumb-item">
            <span v-if="index > 0" class="header__breadcrumb-separator" aria-hidden="true">›</span>
            <router-link
              v-if="crumb.to"
              :to="crumb.to"
              class="header__breadcrumb-link"
            >
              {{ crumb.label }}
            </router-link>
            <span v-else class="header__breadcrumb-current" aria-current="page">
              {{ crumb.label }}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getGradeInfo, getCourse } from '../../data/courseData.js'

const route = useRoute()

const breadcrumbs = computed(() => {
  const crumbs = []
  const { grade, group, lessonId } = route.params

  if (grade) {
    const gradeInfo = getGradeInfo(Number(grade))
    crumbs.push({
      label: gradeInfo ? `${gradeInfo.label} grado` : `Grado ${grade}`,
      to: `/grado/${grade}`,
    })
  }

  if (grade && group) {
    const course = getCourse(Number(grade), Number(group))
    crumbs.push({
      label: `Grupo ${group}`,
      to: `/curso/${grade}/${group}`,
    })

    if (lessonId && course && course.available) {
      const lesson = course.lessons.find(l => l.id === lessonId)
      crumbs.push({
        label: lesson ? lesson.title : 'Clase',
        to: null,
      })
    }
  }

  return crumbs
})
</script>

<style scoped>
.header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
}

.header__container {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  height: 64px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity var(--transition-fast);
}

.header__brand:hover {
  opacity: 0.8;
}

.header__logo {
  width: 36px;
  height: 36px;
  background: var(--gradient-primary);
  color: var(--color-text-on-primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-extrabold);
  font-size: var(--font-size-lg);
}

.header__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.header__breadcrumb {
  overflow: hidden;
}

.header__breadcrumb-list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  list-style: none;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.header__breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  white-space: nowrap;
}

.header__breadcrumb-separator {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
}

.header__breadcrumb-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.header__breadcrumb-link:hover {
  color: var(--color-primary);
}

.header__breadcrumb-current {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 480px) {
  .header__title {
    display: none;
  }

  .header__breadcrumb-current {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
