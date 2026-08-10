<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="app__footer">
      <div class="container">
        <p class="app__footer-text">
          Klazia — Plataforma Educativa de Informática · {{ currentYear }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__main {
  flex: 1;
  padding-top: var(--space-8);
  padding-bottom: var(--space-16);
}

.app__footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  margin-top: auto;
}

.app__footer-text {
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
</style>
