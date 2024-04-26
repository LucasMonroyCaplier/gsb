import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import accueilView from'../components/accueilPage.vue'
import MedecinView from'../views/MedecinView.vue'
import RapportsView from'../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path:'/accueil',
    name: 'accueil',
    component : accueilView
  },
  {
    path:'/medecins',
    name: 'medecins',
    component : MedecinView
  },
  {
    path:'/rapports',
    name: 'rapports',
    component : RapportsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
