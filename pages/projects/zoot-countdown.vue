<template>
    <main :class="`w-full h-full m-auto absolute top-0 left-0 table ${this.mode == 'light' ? 'bg-[#eeeeee]' : 'text-white'}`">
        <canvas ref="confetti" class="absolute top-0 left-0 pointer-events-none z-40 w-screen h-screen"></canvas>

        <h2 class="text-center left-0 right-0 pt-24 text-4xl m-auto text-[#7e1094] select-none">Zuite Stream Countdown</h2>

        <!--<a class="text-white" :onClick="test">fuck</a>-->

        <div class="text-center top-0 bottom-0 left-0 right-0 m-auto h-2/5 w-screen pt-12">
            <h6 class="top-4 left-0 right-0 m-auto text-3xl text-center text-[#a1569e] select-none pointer-events-none">{{ date }} &nbsp;&nbsp; {{ time }}</h6>
            <h4 ref="countdown" class="text-[#a8d1f3] left-0 right-0 m-auto text-7xl select-none pointer-events-none">{{countdown}}</h4>
        </div>

        <p class="text-center left-0 right-0 m-auto text-xl">
            <span id="message">zoot stream</span>
        </p>
    </main>
</template>

<script lang="ts">
function pad(n: number) {
    return (n < 10) ? "0" + n : n;
}

export default {
    head() {
        return {
            title: 'Zuite Stream Countdown - BluSpring'
        };
    },
    methods: {
        removeRequired(event: Event) {
            // @ts-ignore
            event.target.parentElement.remove();
        },
        test() {
            this.run = true;
        }
    },
    data() {
        return {
            date: '00/00/0000',
            time: '00:00:00',

            countdown: '00:00:00:00',
            interval: null,

            mode: 'dark',
            run: false
        };
    },
    mounted() {
        if (window.localStorage.getItem('theme')) {
            this.mode = window.localStorage.getItem('theme');
        }

        const startTime = new Date("2023-02-18T15:00:00.000Z").getTime();
        let started = false;
        let itsNewYear = false;

        this.interval = setInterval(() => {
            if ((Date.now() >= this.songTime && !started) || this.run) {
                started = true;
            }

            const date = new Date();

            this.date = date.toLocaleDateString();
            this.time = date.toLocaleTimeString();

            if (Date.now() < startTime) {
                const distance = Date.now() - startTime;
            
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                this.countdown = `${pad(Math.abs(days + 1))}:${pad(Math.abs(hours + 1))}:${pad(Math.abs(minutes + 1))}:${pad(Math.abs(seconds + 1))}`;

                if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0 && seconds % 2 == 0) {
                    this.$refs.countdown.style.color = 'rgb(238, 43, 43)';
                } else if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0) {
                    this.$refs.countdown.style.color = 'rgb(168, 209, 243)';
                }
            } else {
                if (!itsNewYear) {
                    itsNewYear = true;
                }

                this.countdown = `00:00:00:00`;
            }
        }, 250);
    },
    unmounted() {
        clearInterval(this.interval);
    }
}
</script>
