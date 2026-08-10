<template>
  <div class="course-view">
    <div class="container">
      <BackButton :to="`/grado/${grade}`" label="Volver al grado" />

      <div v-if="course && course.available" class="course-view__content">
        <!-- Header del curso -->
        <header class="course-view__header">
          <div class="course-view__meta">
            <span class="badge badge--info">{{ grade }}-{{ group }}</span>
            <span class="badge badge--available">
              <span class="badge__dot badge__dot--active" aria-hidden="true"></span>
              Activo
            </span>
          </div>
          <h1 class="heading-2">{{ course.title }}</h1>
          <p class="course-view__description">{{ course.description }}</p>
        </header>

        <!-- Lista de lecciones -->
        <section class="course-view__lessons" aria-labelledby="lessons-title">
          <h2 id="lessons-title" class="heading-4">Contenido del curso</h2>
          <div class="course-view__lesson-list">
            <router-link
              v-for="(lesson, index) in course.lessons"
              :key="lesson.id"
              :to="`/curso/${grade}/${group}/clase/${lesson.id}`"
              class="course-view__lesson card card--interactive"
            >
              <div class="course-view__lesson-number">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <div class="course-view__lesson-info">
                <h3 class="course-view__lesson-title">{{ lesson.title }}</h3>
                <p class="course-view__lesson-desc">{{ lesson.description }}</p>
                <div class="course-view__lesson-meta">
                  <span class="course-view__lesson-sections">
                    {{ getLessonLengthText(lesson) }}
                  </span>
                </div>
              </div>
              <span class="course-view__lesson-arrow" aria-hidden="true">→</span>
            </router-link>
          </div>
        </section>
      </div>

      <!-- Curso no disponible -->
      <div v-else class="course-view__unavailable">
        <div class="course-view__unavailable-icon" aria-hidden="true">🔒</div>
        <h1 class="heading-3">Curso no disponible</h1>
        <p class="course-view__unavailable-text">
          Este curso aún está en preparación. Pronto estará disponible.
        </p>
        <router-link to="/" class="btn btn--primary">
          Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCourse } from '../data/courseData.js'
import BackButton from '../components/layout/BackButton.vue'

const props = defineProps({
  grade: { type: Number, required: true },
  group: { type: Number, required: true },
})

const course = computed(() => getCourse(props.grade, props.group))

function getLessonLengthText(lesson) {
  if (lesson.slides && lesson.slides.length) {
    return `${lesson.slides.length} diapositivas`
  }
  if (lesson.sections && lesson.sections.length) {
    return `${lesson.sections.length} secciones`
  }
  return ''
}
</script>

<style scoped>
.course-view__header {
  margin-bottom: var(--space-10);
}

.course-view__meta {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.course-view__description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  margin-top: var(--space-3);
  max-width: 700px;
}

.course-view__lessons {
  margin-top: var(--space-8);
}

.course-view__lesson-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.course-view__lesson {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  text-decoration: none;
  padding: var(--space-6);
}

.course-view__lesson-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
  min-width: 52px;
}

.course-view__lesson-info {
  flex: 1;
  min-width: 0;
}

.course-view__lesson-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.course-view__lesson-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-view__lesson-meta {
  margin-top: var(--space-2);
}

.course-view__lesson-sections {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.course-view__lesson-arrow {
  font-size: var(--font-size-xl);
  color: var(--color-text-tertiary);
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.course-view__lesson:hover .course-view__lesson-arrow {
  color: var(--color-primary);
  transform: translateX(4px);
}

/* Unavailable */
.course-view__unavailable {
  text-align: center;
  padding: var(--space-16) 0;
}

.course-view__unavailable-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

.course-view__unavailable-text {
  color: var(--color-text-secondary);
  margin: var(--space-4) 0 var(--space-8);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
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

@media (max-width: 768px) {
  .course-view__lesson {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .course-view__lesson-number {
    font-size: var(--font-size-2xl);
  }
}
</style>
