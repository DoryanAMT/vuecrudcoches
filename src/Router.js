import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CreateCoche from './components/CreateCoche.vue'
import DetailsCoche from './components/DetailsCoche.vue'
import UpdateCoche from './components/UpdateCoche.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/createcoche", component: CreateCoche
    },
    {
        path: "/detailscoche/:id", component: DetailsCoche
    },
    {
        path: "/updatecoche/:id", component: UpdateCoche
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router