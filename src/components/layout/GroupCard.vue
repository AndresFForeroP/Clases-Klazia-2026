<template>
  <component
    :is="available ? 'router-link' : 'div'"
    :to="available ? `/curso/${grade}/${group}` : undefined"
    class="group-card card"
    :class="{
      'card--interactive': available,
      'group-card--disabled': !available,
    }"
    :aria-label="`Grupo ${group} — ${available ? title : 'Próximamente'}`"
  >
    <div class="group-card__header">
      <div class="group-card__badge-row">
        <span class="group-card__number">{{ grade }}-{{ group }}</span>
        <span v-if="available" class="badge badge--available">
          <span class="badge__dot badge__dot--active" aria-hidden="true"></span>
          Disponible
        </span>
        <span v-else class="badge badge--coming">Próximamente</span>
      </div>
      <h3 class="group-card__title">{{ available ? title : 'Contenido en preparación' }}</h3>
      <p class="group-card__description">{{ available ? description : 'Este grupo estará disponible próximamente.' }}</p>
    </div>

    <div v-if="available" class="group-card__footer">
      <span class="btn btn--primary btn--sm">
        Entrar al curso →
      </span>
    </div>
    <div v-else class="group-card__footer group-card__footer--disabled">
      <span class="group-card__coming-icon" aria-hidden="true">🔒</span>
    </div>
  </component>
</template>

<script setup>
defineProps({
  grade: { type: Number, required: true },
  group: { type: Number, required: true },
  title: { type: String, default: 'Próximamente' },
  description: { type: String, default: '' },
  available: { type: Boolean, default: false },
})
</script>

<style scoped>
.group-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  min-height: 200px;
}

.group-card--disabled {
  opacity: 0.6;
  cursor: default;
  background: var(--color-bg-secondary);
}

.group-card__header {
  margin-bottom: var(--space-4);
}

.group-card__badge-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.group-card__number {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.group-card--disabled .group-card__number {
  background: none;
  -webkit-text-fill-color: var(--color-text-tertiary);
  color: var(--color-text-tertiary);
}

.group-card__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.group-card--disabled .group-card__title {
  color: var(--color-text-tertiary);
}

.group-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.group-card__footer {
  margin-top: auto;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-light);
}

.group-card__footer--disabled {
  display: flex;
  justify-content: center;
  border-top: none;
}

.group-card__coming-icon {
  font-size: var(--font-size-2xl);
  opacity: 0.4;
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
</style>
