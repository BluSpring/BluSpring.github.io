<template>
    <div class="my-4 project-team" :style="cssVars">
        <div class="mx-auto flex text-center">
            <div class="my-32 mx-auto bg-gray-400 bg-opacity-45 dark:bg-opacity-45 dark:bg-black backdrop-blur-sm container py-4 rounded-2xl">
                <img :src="`/img/projects/teams/${image}`" class="mx-auto py-8 h-72">
                <a :href="url" :class="`text-5xl team-title text-${color} hover:text-${hoverColor}`">
                    {{ name }}
                </a>
                <p class="text-2xl py-4 text-gray-100 dark:text-white select-text">
                    {{ description }}
                </p>

                <div class="project-cards mt-8 w-4/5 mx-auto">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: [
            'url', 'background', 'image', 'color', 'hoverColor',
            'name', 'description', 'duration'
        ],
        computed: {
            cssVars() {
                return {
                    '--background-image': `url('/img/projects/backgrounds/${this.background}')`
                };
            }
        }
    }
</script>

<style>
.team-title {
    font-family: 'Rajdhani Semibold', 'Segoe UI', sans-serif;
}

.project-team {
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.project-cards a {
    color: rgb(116, 176, 255);
}

.project-cards a:hover {
    color: rgb(179, 237, 255);
}
</style>