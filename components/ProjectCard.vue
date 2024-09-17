<template>
    <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl flex my-4">
        <img :src="`/img/projects/works/${image}`" class="h-full my-auto rounded-l-2xl object-cover w-1/3">

        <div class="w-full">
            <h3 :class="`text-5xl project-title px-6 pt-6 pb-3 text-${color}`">
                {{ name }}
            </h3>
            <div class="text-left text-xl px-3 py-2 project-description overflow-y-auto bg-black bg-opacity-25 dark:bg-opacity-40 text-white w-11/12 mx-auto h-1/2 rounded-md select-text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-title {
    font-family: 'Rajdhani Medium', 'Segoe UI', sans-serif;
}

.project-description {
    font-family: 'Rajdhani Medium', 'Segoe UI', sans-serif;
}
</style>

<script lang="ts">
    export default {
        props: [
            'color', 'image',
            'name',
        ]
    }
</script>