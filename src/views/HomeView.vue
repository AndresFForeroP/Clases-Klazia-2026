<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
      </div>
      <div class="container hero__container">
        <div class="hero__content">
          <div class="hero__badge animate-fade-in">
            <span class="hero__badge-dot" aria-hidden="true"></span>
            Plataforma Educativa
          </div>
          <h1 id="hero-title" class="hero__title animate-fade-in-up stagger-1">
            <span class="hero__title-line">Bienvenido a</span>
            <span class="hero__title-brand">Klazia</span>
          </h1>
          <p class="hero__subtitle animate-fade-in-up stagger-2">
            Plataforma interactiva de <strong>Informática</strong> para estudiantes de 6.º a 11.º grado. Aprende tecnología de forma práctica y dinámica.
          </p>
          <div class="hero__stats animate-fade-in-up stagger-3">
            <div class="hero__stat">
              <span class="hero__stat-number">6</span>
              <span class="hero__stat-label">Grados</span>
            </div>
            <div class="hero__stat-divider" aria-hidden="true"></div>
            <div class="hero__stat">
              <span class="hero__stat-number">12</span>
              <span class="hero__stat-label">Grupos</span>
            </div>
            <div class="hero__stat-divider" aria-hidden="true"></div>
            <div class="hero__stat">
              <span class="hero__stat-number">{{ availableCount }}</span>
              <span class="hero__stat-label">Disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selector de grados -->
    <section class="grades" aria-labelledby="grades-title">
      <div class="container">
        <div class="grades__header">
          <h2 id="grades-title" class="heading-2">Selecciona tu grado</h2>
          <p class="grades__subtitle">Elige tu grado para acceder al contenido de informática disponible.</p>
        </div>
        <div class="grades__grid">
          <GradeCard
            v-for="(grade, index) in grades"
            :key="grade.number"
            :grade="grade"
            class="animate-fade-in-up"
            :class="`stagger-${index + 1}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { grades, courses } from '../data/courseData.js'
import GradeCard from '../components/layout/GradeCard.vue'

const availableCount = computed(() => {
  return Object.values(courses).filter(c => c.available).length
})
</script>

<style scoped>
/* ── Hero ── */
.hero {
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  padding: var(--space-16) 0 var(--space-20);
  margin-top: calc(-1 * var(--space-8));
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.hero__orb--1 {
  width: 400px;
  height: 400px;
  background: #6366f1;
  top: -100px;
  right: -50px;
}

.hero__orb--2 {
  width: 300px;
  height: 300px;
  background: #06b6d4;
  bottom: -80px;
  left: -30px;
}

.hero__container {
  position: relative;
  z-index: 1;
}

.hero__content {
  max-width: 700px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-6);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: var(--radius-full);
  animation: pulse 2s infinite;
}

.hero__title {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-6);
}

.hero__title-line {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  color: rgba(255, 255, 255, 0.7);
}

.hero__title-brand {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-weight-extrabold);
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.7);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-8);
  max-width: 540px;
}

.hero__subtitle strong {
  color: rgba(255, 255, 255, 0.95);
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__stat-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-extrabold);
  color: white;
  line-height: 1;
}

.hero__stat-label {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: var(--space-1);
}

.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
}

/* ── Grades Section ── */
.grades {
  padding: var(--space-16) 0;
}

.grades__header {
  margin-bottom: var(--space-8);
}

.grades__subtitle {
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
  font-size: var(--font-size-base);
}

.grades__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: var(--space-4);
}

@media (max-width: 768px) {
  .hero {
    padding: var(--space-10) 0 var(--space-12);
  }

  .hero__stats {
    gap: var(--space-4);
  }

  .hero__stat-number {
    font-size: var(--font-size-2xl);
  }

  .grades {
    padding: var(--space-10) 0;
  }

  .grades__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: var(--space-8) 0 var(--space-10);
  }

  .hero__subtitle {
    font-size: var(--font-size-base);
  }
}
</style>
