<template>
  <div class="presentation-controls">
    <div class="presentation-controls__left">
      <button
        class="btn btn--secondary btn--sm"
        :disabled="currentIndex === 0"
        @click="$emit('prev')"
        title="Diapositiva anterior (Flecha Izquierda)"
        aria-label="Diapositiva anterior"
      >
        ← Anterior
      </button>
      <button
        class="btn btn--primary btn--sm"
        :disabled="currentIndex === totalSlides - 1"
        @click="$emit('next')"
        title="Diapositiva siguiente (Flecha Derecha o Espacio)"
        aria-label="Diapositiva siguiente"
      >
        Siguiente →
      </button>
    </div>

    <div class="presentation-controls__center">
      <div class="presentation-controls__progress-track">
        <div
          class="presentation-controls__progress-fill"
          :style="{ width: ((currentIndex + 1) / totalSlides * 100) + '%' }"
        ></div>
      </div>
      <span class="presentation-controls__counter">
        <strong>{{ currentIndex + 1 }}</strong> / {{ totalSlides }}
      </span>
    </div>

    <div class="presentation-controls__right">
      <button
        class="btn btn--ghost btn--sm"
        @click="$emit('toggle-fullscreen')"
        title="Pantalla completa"
        aria-label="Pantalla completa"
      >
        ⛶ {{ isFullscreen ? 'Salir' : 'Ampliar' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentIndex: { type: Number, required: true },
  totalSlides: { type: Number, required: true },
  isFullscreen: { type: Boolean, default: false },
})

defineEmits(['prev', 'next', 'toggle-fullscreen'])
</script>

<style scoped>
.presentation-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-3) var(--space-5);
  box-shadow: var(--shadow-md);
}

.presentation-controls__left,
.presentation-controls__right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.presentation-controls__center {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  max-width: 320px;
}

.presentation-controls__progress-track {
  flex: 1;
  height: 6px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.presentation-controls__progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  transition: width 0.3s ease-out;
}

.presentation-controls__counter {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .presentation-controls {
    flex-wrap: wrap;
    justify-content: center;
  }

  .presentation-controls__center {
    order: 3;
    max-width: 100%;
    width: 100%;
  }
}
</style>
