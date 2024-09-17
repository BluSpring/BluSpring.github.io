<template>
    <div class="navbar fixed top-0 left-0 navbar w-full z-50">
        <div class="mx-auto flex">
            <div class="flex mx-2 left-0 text-blue-50 text-2xl sm:text-3xl md:text-4xl" id="navbar-buttons">
                <NuxtLink @click="onClick" to="/" title="Home" class="navbar-button mx-2">
                    <img src="/img/profile_64x.png" title="Home" class="rounded-full border-[1px] h-12 my-1 border-white hover:border-blue-300">
                </NuxtLink>

                <NuxtLink @click="onClick" class="navbar-button px-1 sm:px-2 py-2 mx-2" to="/" title="Home">
                    <span>Home</span>
                </NuxtLink>

                <NuxtLink @click="onClick" class="navbar-button px-1 sm:px-2 py-2 mx-2" to="/projects" title="Projects">
                    <span>Projects</span>
                </NuxtLink>

                <!--<NuxtLink @click="onClick" class="navbar-button flex-1 navbar-link w-2/3 sm:w-1/3 justify-between text-center align-center content-center px-1 sm:px-2 py-1" to="/commissions"><div>Commissions</div></NuxtLink>-->
                <NuxtLink @click="onClick" class="navbar-button px-1 sm:px-2 py-2 mx-2" to="/specs" title="PC Specs">
                    <span>PC Specs</span>
                </NuxtLink>
            </div>
            <div class="flex mx-4 right-0 text-blue-50 text-2xl sm:text-3xl md:text-4xl fixed">
                <a @click="$colorMode.preference == 'system' ? $colorMode.preference = 'light' : $colorMode.preference == 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'system'" :title="`${$colorMode.preference == 'system' ? 'System' : $colorMode.preference == 'light' ? 'Light Mode' : 'Dark Mode'}`" class="py-2 cursor-pointer hover:text-yellow-500">
                    <i :class="`fas fa-${$colorMode.preference == 'system' ? 'eclipse' : $colorMode.preference == 'light' ? 'sun' : 'moon'}`"></i>
                </a>
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
    color: #95e4ff;
}

.selected {
    color: #31ccff;
}

.dark-mode .selected {
    color: #7ddfff;
}

.selected img {
    border-color: #7ddfff;
}

.selected:hover {
    color: #95e4ff;
}

.selected:hover img {
    border-color: #68bedb;
}
</style>

<script lang="ts">
export default {
    mounted() {
        const buttons = document.getElementById('navbar-buttons')!!;

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

            const children = document.getElementById('navbar-buttons')!!.children;

            for (let i = 0; i < children.length; i++) {
                const child = children.item(i)!!;

                if (child.classList.contains('selected')) {
                    child.classList.remove('selected');
                }

                if (child.children.item(0)!!.classList.contains('selected')) {
                    child.children.item(0)!!.classList.remove('selected');
                }
            }

            target.classList.add('selected');
        }
    }
}
</script>