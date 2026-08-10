<template>
  <div class="slide diagram-slide">
    <div class="diagram-slide__header">
      <span class="diagram-slide__category" v-if="slide.category">{{ slide.category }}</span>
      <h2 class="diagram-slide__title">{{ slide.title }}</h2>
      <p v-if="slide.subtitle" class="diagram-slide__subtitle">{{ slide.subtitle }}</p>
    </div>

    <!-- Diagrama / Matriz / Esquema visual -->
    <div class="diagram-slide__container">
      <!-- Diagrama de flujo / Pasos -->
      <div v-if="slide.diagramType === 'flow'" class="diagram-flow">
        <div
          v-for="(node, idx) in slide.nodes"
          :key="idx"
          class="diagram-flow__item"
        >
          <div class="diagram-flow__node">
            <span v-if="node.icon" class="diagram-flow__icon">{{ node.icon }}</span>
            <span class="diagram-flow__label">{{ node.label }}</span>
            <span v-if="node.desc" class="diagram-flow__desc">{{ node.desc }}</span>
          </div>
          <span v-if="idx < slide.nodes.length - 1" class="diagram-flow__arrow" aria-hidden="true">→</span>
        </div>
      </div>

      <!-- Diagrama comparativo / Columnas -->
      <div v-else-if="slide.diagramType === 'comparison'" class="diagram-comparison">
        <div
          v-for="(col, idx) in slide.columns"
          :key="idx"
          class="diagram-comparison__card"
          :class="`diagram-comparison__card--${idx}`"
        >
          <div class="diagram-comparison__badge" v-if="col.badge">{{ col.badge }}</div>
          <h3 class="diagram-comparison__title">{{ col.title }}</h3>
          <p class="diagram-comparison__desc" v-html="renderMarkdown(col.desc)"></p>
          <div v-if="col.metrics" class="diagram-comparison__metrics">
            <div v-for="(val, key) in col.metrics" :key="key" class="diagram-comparison__metric">
              <span class="diagram-comparison__metric-key">{{ key }}:</span>
              <span class="diagram-comparison__metric-val">{{ val }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabla sintética -->
      <div v-else-if="slide.diagramType === 'table'" class="diagram-table-wrap">
        <table class="diagram-table">
          <thead>
            <tr>
              <th v-for="(col, idx) in slide.tableHeaders" :key="idx">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rIdx) in slide.tableRows" :key="rIdx">
              <td v-for="(cell, cIdx) in row" :key="cIdx" :class="{ 'cell-header': cIdx === 0 }">
                <span v-html="renderMarkdown(cell)"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: { type: Object, required: true },
})

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}
</script>

<style scoped>
.diagram-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-6) var(--space-8);
  justify-content: center;
}

.diagram-slide__header {
  margin-bottom: var(--space-6);
  text-align: center;
}

.diagram-slide__category {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: var(--space-1);
}

.diagram-slide__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.diagram-slide__subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}

.diagram-slide__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Flow */
.diagram-flow {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  justify-content: center;
}

.diagram-flow__item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.diagram-flow__node {
  background: var(--color-surface);
  border: 2px solid var(--color-primary-200);
  border-radius: var(--radius-xl);
  padding: var(--space-5) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 140px;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base);
}

.diagram-flow__node:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.diagram-flow__icon {
  font-size: 2rem;
  margin-bottom: var(--space-2);
}

.diagram-flow__label {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.diagram-flow__desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.diagram-flow__arrow {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

/* Comparison */
.diagram-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-5);
  width: 100%;
  max-width: 960px;
}

.diagram-comparison__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);

}

.diagram-comparison__card:hover {
  box-shadow: var(--shadow-lg);
}

.diagram-comparison__badge {
  display: inline-block;
  align-self: flex-start;
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  background: var(--color-primary-50);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.diagram-comparison__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.diagram-comparison__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-4);
}

.diagram-comparison__metrics {
  margin-top: auto;
  padding-top: var(--space-3);
  border-top: 1px dashed var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.diagram-comparison__metric {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-xs);
}

.diagram-comparison__metric-key {
  color: var(--color-text-tertiary);
}

.diagram-comparison__metric-val {
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
}

/* Table */
.diagram-table-wrap {
  width: 100%;
  max-width: 900px;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.diagram-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
  background: var(--color-surface);
}

.diagram-table th {
  background: var(--color-primary-50);
  color: var(--color-primary-dark);
  padding: var(--space-3) var(--space-4);
  text-align: left;
  font-weight: var(--font-weight-bold);
  border-bottom: 2px solid var(--color-primary-200);
}

.diagram-table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
}

.diagram-table .cell-header {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
</style>
