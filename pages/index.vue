<template>
    <main class="w-full">
        <div class="container profile-card justify-between items-center mx-auto pt-24 w-2/3 md:w-1/3 flex-wrap text-center">
            <img class="profile w-1/2 left-0 right-0 mx-auto rounded-full border-2 border-blue-100" src="/img/profile.png">
            <br>
            <span class="text-5xl md:text-7xl text-blue-300 left-0 right-0 mx-auto text-center">Naz / BluSpring</span>
        </div>
        <div class="container justify-between items-center mx-auto pt-12 w-2/3 md:w-1/3 text-center text-3xl md:text-4xl">
            <div class="pb-2">
                <NuxtLink to="https://youtube.com/IndoHQBluYT" class="thing">3D Animator</NuxtLink> | <NuxtLink to="https://github.com/BluSpring" class="thing">Deve</NuxtLink><NuxtLink to="https://gitlab.com/BluSpring1" class="thing">loper</NuxtLink>
            </div>
            <div class="seperator bg-blue-200 w-1/3 h-px mx-auto"></div>
            <div class="pt-2">
                <NuxtLink to="https://twitch.tv/bluspring" class="thing">Streamer</NuxtLink> | <NuxtLink to="https://youtube.com/IndoHQBlu" class="thing">YouTuber</NuxtLink>
            </div>
        </div>
        <div class="socials container justify-between items-center mx-auto pt-16 pb-6 w-2/3 text-center text-3xl md:text-5xl bottom-0">
            <NuxtLink to="https://twitter.com/BluSpringg" title="Twitter" class="px-5 twitter"><i class="fab fa-twitter"></i></NuxtLink>
            <NuxtLink to="https://twitch.tv/bluspring" title="Twitch" class="px-5 twitch"><i class="fab fa-twitch"></i></NuxtLink>
            <NuxtLink to="https://youtube.com/IndoHQBlu" title="YouTube" class="px-5 youtube"><i class="fab fa-youtube"></i></NuxtLink>
            <NuxtLink to="https://discord.gg/CgJNzJBMf2" title="Discord" class="px-5 discord"><i class="fab fa-discord"></i></NuxtLink>
            <NuxtLink to="https://ko-fi.com/bluspring" title="Ko-Fi" class="px-5 ko-fi"><i class="fas fa-coffee-togo"></i></NuxtLink>
            <NuxtLink to="https://tumblr.bluspring.xyz" title="Tumblr" class="px-5 tumblr"><i class="fab fa-tumblr"></i></NuxtLink>
            <NuxtLink to="https://github.com/BluSpring" title="GitHub" class="px-5 github"><i class="fab fa-github"></i></NuxtLink>
            <NuxtLink to="https://gitlab.com/BluSpring1" title="GitLab" class="px-5 gitlab"><i class="fab fa-gitlab"></i></NuxtLink>
            <NuxtLink to="https://tiktok.com/@bluspring_yt" title="TikTok" class="px-5 tiktok"><i class="fab fa-tiktok"></i></NuxtLink>
            <NuxtLink to="https://reddit.com/u/IndoHQ_Blu_YT" title="Reddit" class="px-5 reddit"><i class="fab fa-reddit"></i></NuxtLink>
        </div>
    </main>
</template>

<style scoped>
.socials {
    color: rgb(206, 206, 206);
}

.twitter:hover {
    color: #1d9bf0;
}

.twitch:hover {
    color: #6441a5;
}

.youtube:hover {
    color: #ff0000;
}

.discord:hover {
    color: #5864f2;
}

.ko-fi:hover {
    color: #FBAA19;
}

.github:hover {
    color: #FFFFFF;
}

.gitlab:hover {
    color: #fc6d26;
}

.tumblr:hover {
    color: #001935;
}

.reddit:hover {
    color: #ff4500;
}

.tiktok:hover {
    color: #FFFFFF;
}

main {
    font-family: 'Rajdhani Light', 'Segoe UI Light', sans-serif;

    color: white;
}

.thing {
    color: rgb(141, 247, 238);
}

.thing:hover {
    color: rgb(194, 242, 248);
}
</style>

<script lang="ts">
export default {
    head() {
        return {
            title: 'Home - BluSpring'
        };
    }
}
</script>