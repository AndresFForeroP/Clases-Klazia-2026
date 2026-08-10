<template>
  <section class="comparison" aria-labelledby="comparison-title">
    <h3 id="comparison-title" class="comparison__title">{{ title }}</h3>
    <div class="comparison__wrapper">
      <table class="comparison__table" role="table">
        <thead>
          <tr>
            <th v-for="(col, index) in columns" :key="index" scope="col">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rIndex) in rows" :key="rIndex">
            <td
              v-for="(cell, cIndex) in row"
              :key="cIndex"
              :class="{ 'comparison__cell--header': cIndex === 0 }"
            >
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
})
</script>

<style scoped>
.comparison__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.comparison__wrapper {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.comparison__table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.comparison__table thead {
  background: var(--color-primary-50);
}

.comparison__table th {
  padding: var(--space-4);
  text-align: left;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
  border-bottom: 2px solid var(--color-primary-200);
  white-space: nowrap;
}

.comparison__table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-light);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.comparison__table tr:last-child td {
  border-bottom: none;
}

.comparison__table tr:hover td {
  background: var(--color-surface-hover);
}

.comparison__cell--header {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}
</style>
