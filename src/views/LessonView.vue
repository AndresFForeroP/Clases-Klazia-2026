<template>
  <div class="lesson-view">
    <div class="container">
      <div class="lesson-view__top-bar">
        <BackButton :to="`/curso/${grade}/${group}`" label="Volver al curso" />
        <span class="badge badge--info" v-if="lesson">{{ grade }}-{{ group }} · {{ lesson.title }}</span>
      </div>

      <!-- Visor de la Presentación Interactiva por Diapositivas -->
      <main v-if="lesson && slides.length" class="lesson-view__content">
        <PresentationViewer :slides="slides" />
      </main>

      <!-- Clase no encontrada -->
      <div v-else class="lesson-view__not-found">
        <h1 class="heading-3">Clase no encontrada</h1>
        <p>La clase que buscas no existe o no está disponible en este momento.</p>
        <router-link to="/" class="btn btn--primary">Volver al inicio</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCourse } from '../data/courseData.js'
import BackButton from '../components/layout/BackButton.vue'
import PresentationViewer from '../components/presentation/PresentationViewer.vue'

const props = defineProps({
  grade: { type: Number, required: true },
  group: { type: Number, required: true },
  lessonId: { type: String, required: true },
})

const course = computed(() => getCourse(props.grade, props.group))
const lesson = computed(() => {
  if (!course.value || !course.value.available) return null
  return course.value.lessons.find(l => l.id === props.lessonId) || null
})

// Obtener las diapositivas de la lección o adaptar secciones legacy
const slides = computed(() => {
  if (!lesson.value) return []

  if (lesson.value.slides && lesson.value.slides.length) {
    return lesson.value.slides
  }

  // Fallback de conversión para estructuras legacy basadas en secciones
  return (lesson.value.sections || []).map(sec => {
    return {
      type: sec.type,
      title: sec.title || 'Diapositiva',
      subtitle: sec.subtitle || sec.description || '',
      ...sec,
    }
  })
})
</script>

<style scoped>
.lesson-view {
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
}

.lesson-view__top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
  gap: var(--space-2);
}

.lesson-view__content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) 0 var(--space-8);
}

.lesson-view__not-found {
  text-align: center;
  padding: var(--space-16) 0;
}

.lesson-view__not-found p {
  color: var(--color-text-secondary);
  margin: var(--space-4) 0 var(--space-8);
}
</style>
