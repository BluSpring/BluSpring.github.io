<script lang="ts">
export default {
    data() {
        return {
            versions: {
                '1.18': [
                    {
                        url: "/static/packs/060823/ZuiteMix-1.18.zip",
                        timestamp: 1691284908349
                    }
                ],
                '1.19': [
                    {
                        url: "/static/packs/060823/ZuiteMix-1.19.zip",
                        timestamp: 1691284908349
                    }
                ],
                '1.20': [
                    {
                        url: "/static/packs/060823/ZuiteMix-1.20.zip",
                        timestamp: 1691284908349
                    }
                ],
                '1.20.2': [
                    {
                        url: "/static/packs/280923/ZuiteMix-1.20.2.zip",
                        timestamp: 1695857578748
                    }
                ],
                '1.20.3': [
                    {
                        url: "/static/packs/271223/ZuiteMix-1.20.3.zip",
                        timestamp: 1703686735003
                    }
                ]
            },
            toggle: {}
        }
    },
    head() {
        return {
            title: `Zuite's Resource Pack Mix`,
            link: [
                { rel: 'icon', href: '/img/zuite/zuite_skull.ico' }
            ]
        };
    },
    mounted() {
        document.getElementsByClassName('navbar').item(0).classList.add('hidden');
    },
    unmounted() {
        document.getElementsByClassName('navbar').item(0).classList.remove('hidden');
    },
}
</script>

<template>
    <div class="background">
        <div class="circles"></div>
    </div>

    <div class="card p-3 sm:p-10 text-center w-screen sm:w-11/12">
        <img src="/img/zuite/zuite_main.png" alt="zuite" class="mx-auto top-0 left-0 right-0 h-1/3">
        <h3 class="text-4xl font-extrabold">Zuite's Resource Pack Mix</h3>

        <div class="list text-sm sm:text-base w-screen sm:w-11/12">
            <template v-for="version in Object.keys(versions).sort((a, b) => parseInt(b.split('.')[1]) - parseInt(a.split('.')[1]))" :key="version">
                <div class="version-button m-2 p-3 rounded-lg" @click="toggle[version] = !toggle[version]">
                    <i :class="`fas fa-caret-${!!toggle[version] ? 'up' : 'down'}`"></i> 
                    
                    <span>{{ version }}</span>
                </div>

                <transition name="slide">
                    <div class="version-list my-0 border-y-0" v-if="!!toggle[version]">
                        <template v-for="pack in versions[version].sort((a, b) => a.timestamp - b.timestamp)" :key="pack.timestamp">
                            <div class="version-list-item p-3">
                                <span class="font-bold float-left">ZuiteMix-{{ version }}</span>
                                <span class="font-regular">{{ new Date(pack.timestamp).toLocaleDateString() }}</span>
                                <a class="dl font-extrabold float-right underline" :href="pack.url">Download</a>
                            </div>
                        </template>
                    </div>
                </transition>
            </template>
        </div>
    </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800);

body {
    font-family: Nunito, sans-serif !important;
    color: rgb(240, 231, 239);
}

.dl {
    color: #f6ddfc;
}

.dl:hover {
    color: #883c97;
}

.version-button {
    background: rgba(22, 17, 21, 0.3);
    cursor: pointer;
}

.version-button i {
    float: left;
    font-size: 150%;
}

.version-list {
    max-height: 50%;
    overflow-y: auto;
}

.version-list-item {
    background: rgba(0, 0, 0, 0.35);
    width: 97%;
    margin: auto;
    left: 0;
    right: 0;
    border: 0.5px rgba(0, 0, 0, 0.1) solid;
}

.list {
    width: 100%;
    height: 60%;
    bottom: 0;
    max-height: 60%;
    overflow: auto;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -15;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #392f6c, #4b367d);
    background-size: cover;
    background-repeat: no-repeat;
}

.card {
    background: #282240c7;
    height: 90%;
    max-height: 90%;
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    border-radius: 16px;
    backdrop-filter: blur(2px);
}

.circles {
    mask-image: radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    mask-image: -webkit-radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    mask-image: -o-radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    mask-repeat: repeat;
    mask-position: center;
    mask-size: 3rem 3rem;

    -webkit-mask-image: radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    -webkit-mask-image: -webkit-radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    -webkit-mask-image: -o-radial-gradient(ellipse at center, #4d3d7fd7 0%, #4d3d7fd7 30%, transparent 30%);
    -webkit-mask-repeat: repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: 3rem 3rem;

    background: linear-gradient(to bottom, #4e3d7f, #694b98);
    background: -webkit-linear-gradient(to bottom, #4e3d7f, #694b98);
    background: -moz-linear-gradient(to bottom, #4e3d7f, #694b98);
    background: -o-linear-gradient(to bottom, #4e3d7f, #694b98);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100%;
    height: 100%;
}
</style>