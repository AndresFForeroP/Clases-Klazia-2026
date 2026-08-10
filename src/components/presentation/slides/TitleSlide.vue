<template>
  <div class="slide title-slide">
    <div class="title-slide__badge" v-if="slide.badge">
      <span>{{ slide.badge }}</span>
    </div>

    <h1 class="title-slide__main-title">{{ slide.title }}</h1>
    <p v-if="slide.subtitle" class="title-slide__subtitle">{{ slide.subtitle }}</p>

    <div v-if="slide.objectives && slide.objectives.length" class="title-slide__objectives">
      <h3 class="title-slide__objectives-heading">Objetivos de la lección:</h3>
      <ul class="title-slide__objectives-list">
        <li v-for="(obj, index) in slide.objectives" :key="index">
          <span class="title-slide__check">✓</span> {{ obj }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: { type: Object, required: true },
})
</script>

<style scoped>
.title-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: var(--space-8);
}

.title-slide__badge {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary-50);
  border: 1px solid var(--color-primary-200);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-6);
}

.title-slide__main-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-4);
  max-width: 900px;
}

.title-slide__subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  max-width: 700px;
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-8);
}

.title-slide__objectives {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  max-width: 650px;
  text-align: left;
  box-shadow: var(--shadow-sm);
}

.title-slide__objectives-heading {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.title-slide__objectives-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.title-slide__objectives-list li {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.title-slide__check {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}
</style>
