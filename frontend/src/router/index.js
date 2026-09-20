import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tugas from '../views/Tugas.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tugas',
      name: 'tugas',
      component: Tugas
    }
  ]
})

export default router