import { experimental_createRouter } from 'vue-router/experimental'
import { resolver } from "vue-router/auto-resolver";
import { createWebHistory } from 'vue-router'

const router = experimental_createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    resolver,
})

export default router
