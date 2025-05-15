<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <RouterLink :to="{ name: 'page-one/:id?', params: { id: 1 } }">One</RouterLink>
        <RouterLink :to="{ name: 'page-two/:id?', params: { id: 'some-slug' } }">Two</RouterLink>
        <RouterView v-slot="{ Component }">
            <Suspense>
                <component :is="Component" />
                <template #fallback>Loading...</template>
            </Suspense>
        </RouterView>
    </div>
</template>
