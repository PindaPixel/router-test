<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    Hello
    <RouterLink :to="{ name: '/' }">Home</RouterLink>
    <RouterLink :to="{ name: '///about/' }">About</RouterLink>
    <RouterView />
</template>