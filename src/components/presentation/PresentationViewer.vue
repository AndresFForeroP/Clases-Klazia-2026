<template>
  <div
    ref="viewerRef"
    class="presentation-viewer"
    :class="{ 'presentation-viewer--fullscreen': isFullscreen }"
  >
    <!-- Atajos de teclado (Tooltip informativo) -->
    <div class="presentation-viewer__shortcuts-hint">
      <span>Navega con <code>←</code> <code>→</code> o <code>Espacio</code></span>
    </div>

    <!-- Marco principal de la diapositiva -->
    <div class="presentation-viewer__slide-frame">
      <transition :name="transitionName" mode="out-in">
        <div :key="currentIndex" class="presentation-viewer__slide-wrapper">
          <component
            :is="currentSlideComponent"
            :slide="currentSlide"
          />
        </div>
      </transition>
    </div>

    <!-- Barra de controles inferior -->
    <PresentationControls
      :current-index="currentIndex"
      :total-slides="slides.length"
      :is-fullscreen="isFullscreen"
      @prev="prevSlide"
      @next="nextSlide"
      @toggle-fullscreen="toggleFullscreen"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PresentationControls from './PresentationControls.vue'
import TitleSlide from './slides/TitleSlide.vue'
import ConceptSlide from './slides/ConceptSlide.vue'
import DiagramSlide from './slides/DiagramSlide.vue'
import ExampleSlide from './slides/ExampleSlide.vue'
import QuestionSlide from './slides/QuestionSlide.vue'
import QuizSlide from './slides/QuizSlide.vue'
import TrueFalseSlide from './slides/TrueFalseSlide.vue'
import ActivitySlide from './slides/ActivitySlide.vue'
import SummarySlide from './slides/SummarySlide.vue'

const props = defineProps({
  slides: { type: Array, required: true },
})

const viewerRef = ref(null)
const currentIndex = ref(0)
const transitionName = ref('slide-next')
const isFullscreen = ref(false)

const currentSlide = computed(() => props.slides[currentIndex.value] || {})

const slideComponentMap = {
  title: TitleSlide,
  concept: ConceptSlide,
  diagram: DiagramSlide,
  example: ExampleSlide,
  question: QuestionSlide,
  quiz: QuizSlide,
  trueFalse: TrueFalseSlide,
  activity: ActivitySlide,
  summary: SummarySlide,
}

const currentSlideComponent = computed(() => {
  const type = currentSlide.value.type || 'concept'
  return slideComponentMap[type] || ConceptSlide
})

function nextSlide() {
  if (currentIndex.value < props.slides.length - 1) {
    transitionName.value = 'slide-next'
    currentIndex.value++
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    transitionName.value = 'slide-prev'
    currentIndex.value--
  }
}

function handleKeyDown(event) {
  if (['input', 'textarea', 'select'].includes(event.target.tagName.toLowerCase())) {
    return
  }

  if (event.key === 'ArrowRight' || event.key === 'Space') {
    event.preventDefault()
    nextSlide()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevSlide()
  }
}

function toggleFullscreen() {
  if (!viewerRef.value) return

  if (!document.fullscreenElement) {
    viewerRef.value.requestFullscreen().then(() => {
      isFullscreen.value = true
    }).catch(err => {
      console.warn('Fullscreen error:', err)
    })
  } else {
    document.exitFullscreen().then(() => {
      isFullscreen.value = false
    })
  }
}

function handleFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  document.addEventListener('fullscreenchange', handleFullscreenChange)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})
</script>

<style scoped>
.presentation-viewer {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.presentation-viewer--fullscreen {
  max-width: 100%;
  height: 100vh;
  background: var(--color-bg);
  padding: var(--space-4);
  justify-content: space-between;
}

.presentation-viewer__shortcuts-hint {
  text-align: right;
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.presentation-viewer__shortcuts-hint code {
  background: var(--color-bg-secondary);
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.presentation-viewer__slide-frame {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  min-height: clamp(480px, 65vh, 680px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.presentation-viewer__slide-wrapper {
  width: 100%;
  height: 100%;
  flex: 1;
}

@media (max-width: 768px) {
  .presentation-viewer__shortcuts-hint {
    display: none;
  }

  .presentation-viewer__slide-frame {
    min-height: 420px;
    border-radius: var(--radius-xl);
  }
}
</style>
