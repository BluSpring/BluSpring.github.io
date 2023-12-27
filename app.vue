<template>
    <div>
        <Navbar />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();

    useHead({
        titleTemplate: '%s - BluSpring'
    });
</script>