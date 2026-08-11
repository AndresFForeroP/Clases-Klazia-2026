/**
 * courseData.js
 * Registro centralizado de todos los cursos de la plataforma.
 * Importa los datos de contenido de cada curso disponible.
 */

import { course7_1 } from './courses/7-1.js'
import { course8_1 } from './courses/8-1.js'
import { course9_1 } from './courses/9-1.js'
import { course10_1 } from './courses/10-1.js'
import { course10_2 } from './courses/10-2.js'

/**
 * Estructura de un curso:
 * {
 *   grade: number,         — Grado (6-11)
 *   group: number,         — Grupo (1-2)
 *   title: string,         — Título del curso
 *   description: string,   — Descripción breve
 *   available: boolean,    — Si el curso está disponible
 *   lessons: Array          — Lecciones del curso
 * }
 */

export const grades = [
  { number: 6, label: '6.º', sublabel: 'Sexto grado', icon: '💡' },
  { number: 7, label: '7.º', sublabel: 'Séptimo grado', icon: '⚡' },
  { number: 8, label: '8.º', sublabel: 'Octavo grado', icon: '🔧' },
  { number: 9, label: '9.º', sublabel: 'Noveno grado', icon: '🌐' },
  { number: 10, label: '10.º', sublabel: 'Décimo grado', icon: '🖥️' },
  { number: 11, label: '11.º', sublabel: 'Undécimo grado', icon: '🚀' },
]

export const courses = {
  '7-1': {
    grade: 7,
    group: 1,
    title: course7_1.title,
    description: course7_1.description,
    available: true,
    lessons: course7_1.lessons,
  },
  '7-2': {
    grade: 7,
    group: 2,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '6-1': {
    grade: 6,
    group: 1,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '6-2': {
    grade: 6,
    group: 2,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '8-1': {
    grade: 8,
    group: 1,
    title: course8_1.title,
    description: course8_1.description,
    available: true,
    lessons: course8_1.lessons,
  },
  '8-2': {
    grade: 8,
    group: 2,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '9-1': {
    grade: 9,
    group: 1,
    title: course9_1.title,
    description: course9_1.description,
    available: true,
    lessons: course9_1.lessons,
  },
  '9-2': {
    grade: 9,
    group: 2,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '10-1': {
    grade: 10,
    group: 1,
    title: course10_1.title,
    description: course10_1.description,
    available: true,
    lessons: course10_1.lessons,
  },
  '10-2': {
    grade: 10,
    group: 2,
    title: course10_2.title,
    description: course10_2.description,
    available: true,
    lessons: course10_2.lessons,
  },
  '11-1': {
    grade: 11,
    group: 1,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
  '11-2': {
    grade: 11,
    group: 2,
    title: 'Próximamente',
    description: 'Este curso estará disponible pronto.',
    available: false,
    lessons: [],
  },
}

/**
 * Obtener los grupos de un grado específico.
 */
export function getGroupsByGrade(gradeNumber) {
  return Object.values(courses).filter(c => c.grade === gradeNumber)
}

/**
 * Obtener un curso por su clave (e.g. '7-1').
 */
export function getCourse(grade, group) {
  return courses[`${grade}-${group}`] || null
}

/**
 * Obtener información del grado.
 */
export function getGradeInfo(gradeNumber) {
  return grades.find(g => g.number === gradeNumber) || null
}
