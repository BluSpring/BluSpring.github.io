<template>
    <div class="specs-card w-2/3 md:w-1/3 text-center p-6 rounded-md mx-auto">
        <h3 class="text-5xl text-gray-50">{{ name }}</h3>
        <h5 class="text-gray-100">{{ type }}</h5>

        <div class="description text-gray-50 p-6 w-11/12 max-h-20 sm:max-h-48 md:max-h-96 mx-auto rounded-md text-sm md:text-base lg:text-xl overflow-auto border-red-600 border-2">{{ description }}</div>
        <h6 class="text-base text-gray-200">{{ model != '' ? `Model: ${model}` : '' }}</h6>
    </div>
</template>

<script lang="ts">
export default {
    props: [ 'name', 'type', 'description', 'model' ]
}
</script>

<style scoped>
.description {
    background-color: rgba(0, 0, 0, 0.2);
}

.specs-card {
    background: rgba(0, 0, 0, 0.4);
}
</style>