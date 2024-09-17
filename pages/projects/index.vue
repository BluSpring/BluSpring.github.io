<template>
    <Title>Projects</Title>

    <p class="text-red-600 text-red-400 text-cyan-200 text-cyan-300 text-yellow-400 text-pink-300 text-green-400"></p>

    <main class="w-full h-full m-auto absolute top-0 left-0 table">
        <div class="projects align-top table-cell">
            <div class="projects-wrapper overflow-auto justify-center align-middle content-center object-center items-center max-h-full h-full">
                <div class="h-24"></div>

                <h1 class="text-center text-cyan-400 dark:text-cyan-200 text-8xl py-8">Projects</h1>

                <ProjectTeam color="cyan-300" hoverColor="cyan-200" image="bluspring.png" 
                    name="Personal Projects"
                    description="My own personal projects that I've made over the years."
                    background="kilt.webp"
                    url="/"
                    duration="2017-"
                >
                    <ProjectCard color="cyan-400" image="kilt.png" name="Kilt">
                        A Minecraft mod designed to load Forge mods in Fabric. Currently under very heavy development, and is very unstable.<br><br>

                        The development can be followed on <a href="https://github.com/KiltMC/Kilt">GitHub</a> and <a href="https://discord.gg/enGK2TymYJ">Discord</a>.
                    </ProjectCard>

                    <ProjectCard color="red-400" image="nicknamer.png" name="Nicknamer">
                        A Fabric mod for client-side nicknames.
                    </ProjectCard>

                    <ProjectCard color="red-600" image="enhancedbookwriting.png" name="Enhanced Book Writing">
                        A Fabric mod for having a better experience with writing books in Minecraft.
                    </ProjectCard>
                </ProjectTeam>

                <ProjectTeam color="pink-300" hoverColor="pink-200" image="crunchmunch.png" 
                    name="CrunchMunch Creations"
                    description="A team of 3 Minecraft creators (myself, Zuite and FlopsyMimi) who came together and started making things together."
                    background="crunchmunch.webp"
                    url="https://crunchmunch.xyz"
                    duration="2023-"
                >
                    <ProjectCard color="green-400" image="chrunchy_christmas.webp" name="Chrunchy Christmas">
                        A streamer-only Christmas charity event for raising money towards Jingle Jam, created alongside WraithStation
                        and Vandal Events. Includes some of our own unique takes of popular minigames, and new never-before-seen minigames,
                        such as a minigame that involves the Warden.
                    </ProjectCard>

                    <ProjectCard color="red-400" image="e.webp" name="The E Project">
                        A work-in-progress, fully Vanilla Minecraft map designed entirely around Technoblade and his memory.<br>

                        Inspired by the Diversity map series by qmagnet.
                    </ProjectCard>
                </ProjectTeam>

                <ProjectTeam color="cyan-300" hoverColor="cyan-200" image="unitymp.png" 
                    name="Unity Multiplayer"
                    description="The largest multilingual factions SMP."
                    background="unitymp.webp"
                    url="https://twitter.com/UnityUpdatesEN"
                    duration="2024-"
                >
                    <ProjectCard color="yellow-400" image="unitytranslate.png" name="UnityTranslate">
                        The first public live voice translation mod for Minecraft. Inspired by the QSMP.<br>
                        Uses the LibreTranslate API, an open source translation API created by Argos Open Tech.<br><br>
                        Available for download on <a href="https://modrinth.com/mod/unitytranslate">Modrinth</a> and <a href="https://curseforge.com/minecraft/mc-mods/unitytranslate">CurseForge</a>.
                    </ProjectCard>

                    <ProjectCard color="green-400" image="unitils.png" name="Unitils">
                        The utility mod used by Unity Multiplayer for handling flag icons, live indication,
                        nicknames, badges and more.
                    </ProjectCard>
                </ProjectTeam>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
export default {
    head() {
        return {
            title: 'Projects - BluSpring'
        };
    }
}
</script>
