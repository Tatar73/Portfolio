import { createRouter, createWebHistory } from 'vue-router'
import ImagesPage from '../views/ImagesPage.vue'
import ImagePage from '../views/ImagePage.vue'



const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue')},
    {path: '/images', name: 'ImagesPage', component: ImagesPage},
    {path: '/image/:index',name: 'ImagePage', component: ImagePage}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router