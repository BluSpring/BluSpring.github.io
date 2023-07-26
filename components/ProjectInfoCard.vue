<template>
    <NuxtLink :to="link" class="project-info flex text-center h-full w-1/3 md:w-1/5 hover:brightness-110">
        <div class="w-full h-full rounded-bl-md rounded-tl-md" :style="'background-color: ' + color">
            <div class="h-full">
                <div class="image w-full h-1/3 rounded-tl-md" :style="'--image: url(/img/projects/teams/' + image + ')'"> </div>
                <div class="info pt-2 pb-2 md:pt-4 md:pb-4 h-2/3 overflow-y-auto overflow-x-hidden">
                    <h2 class="name text-2xl lg:text-3xl text-gray-200">{{ name }}</h2>
                    <h4 class="title text-xl lg:text-2xl">{{ title }}</h4>

                    <div class="description w-11/12 max-h-20 sm:max-h-48 md:max-h-96 mx-auto rounded-md text-sm md:text-base lg:text-xl overflow-auto p-2">{{ description }}</div>

                    <h6 class="bottom-0 text-gray-300">{{ period }}</h6>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
export default {
    props: [ 'name', 'title', 'image', 'description', 'link', 'period', 'color' ]
}
</script>

<style scoped>
.project-info:hover .image {
    background-size: 110%;
}

.info .name {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.info {
    font-family: 'Rajdhani', 'Segoe UI Light', sans-serif;
}

.info .title {
    color: rgb(185, 185, 185);
}

.info .description {
    background-color: rgba(0, 0, 0, 0.2);

    color: rgb(222, 241, 236);
}

.image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--image);
    background-color: rgba(0, 0, 0, 0.4);
    transition: all .2s ease-in-out;
}
</style>