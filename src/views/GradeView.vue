<template>
  <div class="grade-view">
    <div class="container">
      <BackButton to="/" label="Volver al inicio" />

      <div class="grade-view__header" v-if="gradeInfo">
        <span class="grade-view__icon" aria-hidden="true">{{ gradeInfo.icon }}</span>
        <div>
          <h1 class="heading-2">{{ gradeInfo.label }} Grado</h1>
          <p class="grade-view__subtitle">Selecciona tu grupo para acceder al contenido.</p>
        </div>
      </div>

      <div class="grade-view__groups">
        <GroupCard
          v-for="groupData in groups"
          :key="`${groupData.grade}-${groupData.group}`"
          :grade="groupData.grade"
          :group="groupData.group"
          :title="groupData.title"
          :description="groupData.description"
          :available="groupData.available"
          class="animate-fade-in-up"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getGradeInfo, getGroupsByGrade } from '../data/courseData.js'
import BackButton from '../components/layout/BackButton.vue'
import GroupCard from '../components/layout/GroupCard.vue'

const props = defineProps({
  grade: { type: Number, required: true },
})

const gradeInfo = computed(() => getGradeInfo(props.grade))
const groups = computed(() => getGroupsByGrade(props.grade))
</script>

<style scoped>
.grade-view__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.grade-view__icon {
  font-size: 2.5rem;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
}

.grade-view__subtitle {
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.grade-view__groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .grade-view__groups {
    grid-template-columns: 1fr;
  }
}
</style>
