import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import BaseLayout from '@/views/BaseLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: BaseLayout,
            children: [
                { name: "page-one", path: "page-one", children: [{ path: ":id?", name: "page-one/:id?", component: PageOne }] },
                { name: "page-two", path: "page-two", children: [{ path: ":id?", name: "page-two/:id?", component: PageTwo }] },
            ]
        },
    ],
})

export default router
