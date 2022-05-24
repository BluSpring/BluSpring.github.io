<template>
    <div class="specification text-center text-white p-0.5 rounded-md inline-block mx-auto">
        <div class="spec-card p-2 border-black rounded-md">
            <div class="title text-gray-200">{{title}}</div>
            <div class="description select-text">{{description}}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: ['title', 'description']    
}
</script>

<style scoped>
.spec-card {
    border: 1px solid black;
    background: rgb(167, 94, 94);
}
</style>