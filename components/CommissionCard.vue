<template>
    <div class="container bg-blue-500 w-2/5 md:w-1/5 text-white p-6 rounded-md my-4 mx-4 inline-block">
        <h2 class="text-4xl">{{ name }}</h2>
        <div class="description w-11/12 max-h-20 sm:max-h-48 md:max-h-96 mx-auto rounded-md text-sm md:text-base lg:text-xl overflow-auto p-2">{{ description }}</div>

        <h4 class="text-2xl">{{ price }}</h4>
        <h5 class="">Slots: {{ slots }} / {{ maxSlots }}</h5>
    </div>
</template>

<script lang="ts">
export default {
    props: [ 'name', 'description', 'slots', 'maxSlots', 'price' ]
}
</script>

<style scoped>
.description {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>