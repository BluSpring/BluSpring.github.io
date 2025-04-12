<script lang="ts">
export default {
    head() {
        return {
            title: `Zuite's Donation Page`,
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
    <Title>Zuite's Donation Page</Title>

    <div class="background">
        <!--<div class="circles"></div>-->
    </div>

    <div class="xl:flex">
        <div class="xl:w-1/2 xl:h-screen text-center block xl:flex px-12 py-8">
            <div class="my-auto">
                <h3 class="text-5xl sm:text-6xl md:text-8xl font-extrabold pb-8">Just kidding!<br>I am employed :P</h3>
                <p class="text-xl md:text-2xl pt-8 bree-serif">
                    Please spend your money responsibly.
                    <br><br>
                    If you absolutely must throw money at me, just subscribe on Twitch or chuck some bits at me.
                    <br><br>
                    Save your money for things you want or would like to do!
                </p>
            </div>
        </div>

        <div class="xl:h-screen">
            <img class="right-0 h-full aspect-square my-auto" src="/img/zuite/zuite_donate.webp">
        </div>
    </div>

    
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800);
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

body {
    font-family: Nunito, sans-serif !important;
    color: rgb(240, 231, 239);
    overflow-y: auto;
}

.bree-serif {
  font-family: "Bree Serif", serif;
  font-weight: 400;
  font-style: normal;
}

.dl {
    color: #f6ddfc;
}

.dl:hover {
    color: #883c97;
}

.version-button {
    background: rgba(117, 50, 50, 0.3);
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
    background: rgba(41, 13, 13, 0.35);
    width: 97%;
    margin: auto;
    left: 0;
    right: 0;
    border: 0.5px rgba(41, 13, 13, 0.1) solid;
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
    height: 100vh;
    width: 100vw;
    /*background: linear-gradient(to bottom, #392f6c, #4b367d);*/
    background: #290d40;
    background-size: cover;
    background-repeat: no-repeat;
}

.card {
    /*background: #282240c7;*/
    background: #b96e6ec7;
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

</style>