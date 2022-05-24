<template>
    <div class="navbar fixed top-0 left-0 navbar w-full z-50">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div class="flex flex-wrap items-center w-full right-0 left-0 mx-auto text-blue-50 text-2xl sm:text-3xl md:text-4xl" id="navbar-buttons">
                <NuxtLink @click="onClick" class="navbar-button flex-1 navbar-link w-2/3 sm:w-1/3 justify-between items-center text-center align-center content-center px-1 sm:px-2 py-1" to="/"><div>Home</div></NuxtLink>
                <NuxtLink @click="onClick" class="navbar-button flex-1 navbar-link w-2/3 sm:w-1/3 justify-between items-center text-center align-center content-center px-1 sm:px-2 py-1" to="/projects"><div>Projects</div></NuxtLink>
                <NuxtLink @click="onClick" class="navbar-button flex-1 navbar-link w-2/3 sm:w-1/3 justify-between items-center text-center align-center content-center px-1 sm:px-2 py-1" to="/commissions"><div>Commissions</div></NuxtLink>
                <NuxtLink @click="onClick" class="navbar-button flex-1 navbar-link w-2/3 sm:w-1/3 justify-between items-center text-center align-center content-center px-1 sm:px-2 py-1" to="/specs"><div>PC Specs</div></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    font-family: 'Uni Sans Thin', 'Segoe UI Light', sans-serif;
    background: rgba(0, 0, 0, 0.255);

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
}

.navbar-button:hover {
    color: #68bedb;
}

.selected {
    color: #7ddfff;
}

.selected:hover {
    color: #68bedb;
}
</style>

<script lang="ts">
export default {
    mounted() {
        const buttons = document.getElementById('navbar-buttons');

        const children = buttons.children;

        for (let i = 0; i < children.length; i++) {
            const child = children.item(i) as HTMLLinkElement;

            if (document.location.href == child.href) {
                child.classList.add('selected');
            } else if (child.classList.contains('selected')) {
                child.classList.remove('selected');
            }
        }
    },
    methods: {
        onClick: function (ev: MouseEvent) {
            const target = ev.target as HTMLLinkElement;

            const children = document.getElementById('navbar-buttons').children;

            for (let i = 0; i < children.length; i++) {
                const child = children.item(i);

                if (child.classList.contains('selected')) {
                    child.classList.remove('selected');
                }

                if (child.children.item(0).classList.contains('selected')) {
                    child.children.item(0).classList.remove('selected');
                }
            }

            target.classList.add('selected');
        }
    }
}
</script>