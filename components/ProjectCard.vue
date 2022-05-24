<template>
    <NuxtLink :to="link" class="project-info flex text-center h-5/6 w-32 md:w-48 lg:w-80 hover:brightness-110">
        <div class="w-full h-full rounded-bl-md rounded-tl-md bg-blue-400">
            <div class="h-full">
                <div class="image w-full h-1/3 rounded-tl-md" :style="'--image: url(/assets/img/projects/works/' + image + ')'"> </div>
                <div class="info pt-2 pb-2 md:pt-4 md:pb-4 h-2/3 overflow-y-auto overflow-x-hidden">
                    <h2 class="title text-2xl lg:text-3xl text-gray-200">{{ title }}</h2>

                    <div class="description w-11/12 max-h-20 sm:max-h-48 md:max-h-96 mx-auto rounded-md text-sm md:text-base lg:text-xl overflow-auto p-2">{{ description }}</div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
export default {
    props: [ 'title', 'image', 'description', 'link' ]
}
</script>

<style scoped>
.image:hover {
    background-size: 125%;
}

.project-info:hover .image {
    background-size: 125%;
}

.info .title {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.info {
    font-family: 'Rajdhani', 'Segoe UI Light', sans-serif;
}

.info .description {
    background-color: rgba(0, 0, 0, 0.2);

    color: rgb(222, 241, 236);
}

.image {
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--image);
    background-color: rgba(0, 0, 0, 0.4);
    transition: all .2s ease-in-out;
}
</style>