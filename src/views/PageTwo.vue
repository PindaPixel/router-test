<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = computed(() => {
    console.log("evaluating id in page two");
    return route.params.id && Number.parseInt(route.params.id as string);
});

const artificialPromise = Promise.withResolvers();
setTimeout(artificialPromise.resolve, 1000);
await artificialPromise.promise;
</script>

<template>
    <div>{{ id }}</div>
</template>