<template>
    <div class="navbar fixed top-0 left-0 navbar w-full">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div class="flex items-center w-full right-0 left-0 mx-auto text-blue-50">
                <NuxtLink class="navbar-button flex-1 navbar-link w-1/3 text-2xl sm:text-3xl md:text-4xl justify-between items-center text-center align-center content-center px-2 py-1" to="/"><div>Home</div></NuxtLink>
                <NuxtLink class="navbar-button flex-1 navbar-link w-1/3 text-2xl sm:text-3xl md:text-4xl justify-between items-center text-center align-center content-center px-2 py-1" to="/projects"><div>Projects</div></NuxtLink>
                <NuxtLink class="navbar-button flex-1 navbar-link w-1/3 text-2xl sm:text-3xl md:text-4xl justify-between items-center text-center align-center content-center px-2 py-1" to="/commissions"><div>Commissions</div></NuxtLink>
                <NuxtLink class="navbar-button flex-1 navbar-link w-1/3 text-2xl sm:text-3xl md:text-4xl justify-between items-center text-center align-center content-center px-2 py-1" to="/specs"><div>PC Specs</div></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    font-family: 'Uni Sans Thin';
    background: rgba(127, 127, 127, 0.055);
}

.navbar-button:hover {
    color: #68bedb;
}
</style>