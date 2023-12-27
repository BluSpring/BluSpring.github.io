<!-- copilot-description is basically what GitHub Copilot came up with, and it's funny -->

<!-- TODO: need to be improved -->
<template>
    <Title>Projects</Title>

    <main class="w-full h-full m-auto absolute top-0 left-0 table">
        <div class="projects h-full align-top table-cell pt-14">
            <div class="projects-wrapper overflow-auto justify-center align-middle content-center object-center items-center max-h-full h-full">
                <div class="w-11/12 h-96 md:h-2/3 pt-6 pb-1 md:pt-1 mx-auto">
                    <div class="project w-full h-full max-h-full rounded-md float-left overflow-y-hidden overflow-x-scroll">
                        <ProjectInfoCard 
                            name="Personal Projects"
                            title="" 
                            image="bluspring.png"
                            description="My own personal projects that I've been proud of."
                            period="2017-"
                            link="https://bluspring.xyz"
                            color="#53C6B9"
                            class="inline-block mt-2 float-left"
                        />

                        <ProjectCard
                            title="Kilt"
                            image="kilt.png"
                            description="A Fabric mod designed to bring Forge mods into Fabric."
                            link="https://github.com/KiltMC/Kilt"
                            class="inline-block ml-2 mt-2 float-left"
                        />

                        <ProjectCard
                            title="Nicknamer"
                            image="nicknamer.png"
                            description="A Fabric mod for client-side nicknames."
                            link="https://github.com/BluSpring/Nicknamer"
                            class="inline-block ml-2 mt-2 float-left"
                        />
                    </div>
                </div>

                <div class="w-11/12 h-96 md:h-2/3 pt-6 pb-1 md:pt-1 mx-auto">
                    <div class="project w-full h-full max-h-full rounded-md float-left overflow-y-auto overflow-x-auto">
                        <ProjectInfoCard 
                            name="CaptainPuffy"
                            title="Developer" 
                            image="puffy.png"
                            copilot-description="A Discord bot that allows users to create and manage their own Puffy server. The bot is currently in development and is not available for use."
                            description="I work with a team of people on making Minecraft plugins & mods for content creator CaptainPuffy."
                            period="2022-"
                            link="https://youtube.com/CaptainPuffy"
                            color="#97232d"
                            class="inline-block mt-2 float-left"
                        />

                        <ProjectCard 
                            title="Minecraft, But EVERY Recipe is RANDOM!"
                            image="randomized_crafting.jpg"
                            description="A Minecraft plugin where crafting recipes generate a random item every 5 minutes."
                            link="https://www.youtube.com/watch?v=_ALo9zq3jkc"
                            class="inline-block ml-2 mt-2 float-left"
                        />
                        
                        <ProjectCard 
                            title="Minecraft, But I beat it Backwards!"
                            image="backwards_mc.jpg"
                            description="A Minecraft mod that makes you start in the End, and work your way up to the Overworld."
                            link="https://www.youtube.com/watch?v=8Rw5Y3FsShU"
                            class="inline-block ml-2 mt-2 float-left"
                        />

                        <ProjectCard 
                            title="Minecraft, But I Can ONLY Walk in a Straight Line"
                            image="straight_mc.jpg"
                            description="A Minecraft mod that only allows you to walk in a straight line."
                            link="https://www.youtube.com/watch?v=7lS1xKz5nDE"
                            class="inline-block ml-2 mt-2 float-left"
                        />

                        <ProjectCard 
                            title="THIS MINECRAFT YOUTUBER GOT MONEY JUST BECAUSE I JUMPED!?"
                            image="jump_mc.jpg"
                            description="A Minecraft plugin that randomizes which creator you transform into whenever you jump."
                            link="https://www.youtube.com/watch?v=3Fpfad3HsOA"
                            class="inline-block ml-2 mt-2 float-left"
                        />
                    </div>
                </div>

                <div class="w-11/12 h-96 md:h-2/3 pt-6 pb-1 md:pt-1 mx-auto">
                    <div class="project w-full h-full max-h-full rounded-md float-left overflow-y-hidden overflow-x-scroll">
                        <ProjectInfoCard 
                            name="Vandal Events"
                            title="Lead Developer" 
                            image="vandal.png"
                            description="We are a group of people working on seasonal-based Minecraft community events."
                            period="2021-"
                            link="https://vandal.events"
                            color="#4d978b"
                            class="inline-block mt-2 float-left"
                        />

                        <ProjectCard
                            title="Denim"
                            image="denim.png"
                            description="A Minecraft mod that entirely revamps the Ender Dragon battle by introducing new gameplay elements, while also not requiring any mods to be installed on the client-side. Currently not ready for public release."
                            link="https://gitlab.com/vandal-events/spring-2022/denim"
                            class="inline-block ml-2 mt-2 float-left"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.project {
    background: rgba(0, 0, 0, 0.2115);
}
</style>

<script lang="ts">
export default {
    head() {
        return {
            title: 'Projects - BluSpring'
        };
    }
}
</script>
