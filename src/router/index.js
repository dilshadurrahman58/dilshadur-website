import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResearchView from '../views/ResearchView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/research', name: 'Research', component: ResearchView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
