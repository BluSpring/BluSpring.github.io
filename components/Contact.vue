<template>
    <NuxtLink :to="url" :title="name" class="text-white w-1/5 md:w-1/4 lg:w-1/6 h-12 inline-flex mx-4 hover:brightness-110 mt-4">
        <div :style="'background-color:' + color" class="w-full h-full rounded-full my-auto text-base md:text-2xl p-2 items-center space-x-2">
            <div class="icon text-center float-left p-1 w-9 h-9 my-auto"><i :class="icon"></i></div>
            {{ name }}
        </div>
    </NuxtLink>
</template>

<script lang="ts">
export default {
    props: [ 'name', 'url', 'color', 'icon' ]
}
</script>