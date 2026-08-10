import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Klazia — Plataforma de Informática' },
  },
  {
    path: '/grado/:grade',
    name: 'grade',
    component: () => import('../views/GradeView.vue'),
    meta: { title: 'Selecciona tu grupo' },
    props: (route) => ({ grade: Number(route.params.grade) }),
  },
  {
    path: '/curso/:grade/:group',
    name: 'course',
    component: () => import('../views/CourseView.vue'),
    meta: { title: 'Curso' },
    props: (route) => ({
      grade: Number(route.params.grade),
      group: Number(route.params.group),
    }),
  },
  {
    path: '/curso/:grade/:group/clase/:lessonId',
    name: 'lesson',
    component: () => import('../views/LessonView.vue'),
    meta: { title: 'Clase' },
    props: (route) => ({
      grade: Number(route.params.grade),
      group: Number(route.params.group),
      lessonId: route.params.lessonId,
    }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// Actualizar el título de la página en cada navegación
router.afterEach((to) => {
  document.title = to.meta.title || 'Klazia — Plataforma de Informática'
})

export default router
