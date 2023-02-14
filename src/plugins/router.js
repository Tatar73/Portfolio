import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue')},
    {path: '/realisations', name: 'realisations', component: () => import('@/views/Realisations.vue')},

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router