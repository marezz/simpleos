import { createRouter, createWebHistory } from "vue-router"
import Open from '../views/Open.vue'

const routes = [
    {path:'/',name: "Open", component: Open},
    {path:'/home',component: () => import('../views/Home.vue'),props:true},

    {path:'/internet',component: () => import('../views/internet/IntMenu.vue')},
    {path:'/internet/sites',component: () => import('../views/internet/IntSites.vue')},

    {path:'/email',component: () => import('../views/email/EmailMenu.vue')},
    {path:'/email/escrever',component: () => import('../views/email/EmailEsc.vue')},

    {path:'/aprender',component: () => import('../views/aprender/AprMenu.vue')},
    {path:'/aprender/instrucoes',component: () => import('../views/aprender/AprInst.vue')},
    {path:'/aprender/digitar',component: () => import('../views/aprender/AprTeclado.vue')},
    {path:'/aprender/mouse',component: () => import('../views/aprender/AprMouse.vue')},

    {path:'/notas',component: () => import('../views/notas/NotasMenu.vue')},
    {path:'/notas/escrever',component: () => import('../views/notas/NotasEsc.vue')},
    {path:'/notas/desenhar',component: () => import('../views/notas/NotasPaint.vue')},
    
    {path:'/configs',component: () => import('../views/configs/ConfigMenu.vue')},
    {path:'/configs/audio',component: () => import('../views/configs/ConfigAudio.vue')},
    {path:'/configs/fonte',component: () => import('../views/configs/ConfigFonte.vue')},
    {path:'/configs/cores',component: () => import('../views/configs/ConfigCores.vue')}
]

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router