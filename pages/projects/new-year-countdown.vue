<template>
    <Title>New Year Countdown</Title>

    <main :class="`w-full h-full m-auto absolute top-0 left-0 table ${this.mode == 'light' ? 'bg-[#eeeeee]' : 'text-white'}`">
        <canvas ref="confetti" class="absolute top-0 left-0 pointer-events-none z-40 w-screen h-screen"></canvas>

        <h2 class="text-center left-0 right-0 pt-24 text-4xl m-auto text-[#7e1094] select-none">New Years' Countdown</h2>

        <div class="z-[1000] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80">
            <button class="absolute top-0 left-0 right-0 bottom-0 m-auto h-fit z-[1002] text-white border-2 border-white rounded-md p-3 text-2xl bg-red-900" :onClick="removeRequired">Due to browser policies, you are required to push this button for the music to automatically start playing.</button>
        </div>

        <!--<a class="text-white" :onClick="test">fuck</a>-->

        <div class="text-center top-0 bottom-0 left-0 right-0 m-auto h-2/5 w-screen pt-12">
            <h6 class="top-4 left-0 right-0 m-auto text-3xl text-center text-[#a1569e] select-none pointer-events-none">{{ date }} &nbsp;&nbsp; {{ time }}</h6>
            <h4 ref="countdown" class="text-[#a8d1f3] left-0 right-0 m-auto text-7xl select-none pointer-events-none">{{countdown}}</h4>

            <div class="bottom-[-15%] right-0 left-0 m-auto">
                <button :onClick="testSong" ref="testButton" class="text-blue-400 underline">Push me to test if audio works.</button>
            </div>

            <div class="bottom-0 right-0 left-0 m-auto inline-block w-fit h-20 text-xl lg:text-2xl text-center">
                <label for="song" class="song-label">Current Song</label>
                <br />
                <select name="song" ref="songsList" :onChange="setCurrentSong" class="text-black text-center font-semibold p-3">
                    <option v-for="song in songsList" v-bind:key="song.url">
                        {{ song.name }}
                    </option>
                </select>
            </div>
        </div>

        <p class="text-center left-0 right-0 m-auto text-xl">
            <span id="message">This should play <span class="text-blue-400">"{{ currentSongName }}"</span> the second it reaches {{ currentSongTime }}, I hope.</span><br><br>
            From then, there is a part in the song that will hopefully be perfectly timed with when it reaches 12 AM in your time zone.<br>
            <strong>Make sure your clock is actually synchronized with real-world time!</strong>
        </p>
    </main>
</template>

<script lang="ts">
import ConfettiGenerator from '@/assets/js/confetti.js';

function pad(n: number) {
    return (n < 10) ? "0" + n : n;
}

export default {
    head() {
        return {
            title: 'New Year Countdown - BluSpring'
        };
    },
    methods: {
        setCurrentSong(event: Event) {
            // @ts-ignore
            const value = event.target.value;

            const currentSong = this.songsList.find(a => a.name == value);

            this.setSong(currentSong);
        },
        setSong(song: { name: string, url: string, startAt: string }) {
            this.currentSongName = song.name;
            let startAt = this.currentSongTime = song.startAt;

            if (this.iOSSafari) { // Safari for some reason starts a whole second later, need to compensate.
                const split = startAt.split(':');

                startAt = `${split[0]}:${split[1]}:${parseInt(split[2]) - 1}`;
            }

            this.songTime = new Date(`Dec 31, ${new Date().getFullYear()} ${startAt}`).getTime();

            this.audio = new Audio();
            this.audio.src = song.url;
            this.audio.loop = false;
            this.audio.load();
        },
        testSong(event: Event) {
            const testButton: HTMLButtonElement = event.target as HTMLButtonElement;
        
            testButton.disabled = true;

            const audioCopy = this.audio;

            audioCopy.currentTime = Math.floor(Math.random() * (audioCopy.duration - 1)) + 1;
            audioCopy.play().then(() => {
                if ('mediaSession' in window.navigator) {
                    window.navigator.mediaSession.setActionHandler('play', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('pause', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
                }
            }).catch(e => {});

            audioCopy.onplaying = () => {
                setTimeout(() => {
                    audioCopy.onplaying = null;

                    audioCopy.pause();
                    audioCopy.currentTime = 0;
                    testButton.disabled = false;
                }, 5000);
            }
        },
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
            currentSongName: '{name}',
            currentSongTime: '{time}',
            songsList: [
                {
                    name: "Technoblade - Blitz",
                    url: "/music/blitz.mp3",
                    startAt: '23:58:36'
                },
                {
                    name: "Wilbur Soot - Your New Boyfriend",
                    url: "/music/ynb.mp3",
                    startAt: '23:58:48'
                },
                {
                    name: 'Glass Animals - Heat Waves',
                    url: '/music/heatwaves.mp3',
                    startAt: '23:59:43'
                },
                {
                    name: 'Lovejoy - The Fall',
                    url: '/music/thefall.mp3',
                    startAt: '23:57:47'
                },
                {
                    name: 'Lovejoy - It\'s All Futile! It\'s All Pointless!',
                    url: '/music/iafiap.mp3',
                    startAt: '23:58:51'
                },
                {
                    name: 'Lovejoy - Model Buses',
                    url: '/music/modelbuses.mp3',
                    startAt: '23:57:52'
                },
                {
                    name: 'CG5 - I See A Dreamer', 
                    url: '/music/isad.mp3',
                    startAt: '23:58:30'
                },
                {
                    name: 'Dream - Slow Down',
                    url: '/music/slowdown.mp3',
                    startAt: '23:58:51'
                }
            ],
            // i'm pretty sure these are random values?
            startAt: 9953959549044432,
            songTime: 3049035903590539359,

            iOSSafari: false,
            audio: new Audio(),
            confetti: null,

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

        // Safari check
        var ua = window.navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var webkit = !!ua.match(/WebKit/i);

        this.iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

        const startTime = new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
        
        // @ts-ignore
        this.confetti = new ConfettiGenerator({
            target: this.$refs.confetti,
            rotate: true,
            width: window.innerWidth,
            height: window.innerHeight,
            clock: 45,
            start_from_edge: true,
            respawn: true
        });

        this.setSong(this.songsList[0]);

        let ready = false;
        let started = false;
        let itsNewYear = false;

        let runConfetti = false;

        this.interval = setInterval(() => {
            if (Date.now() >= this.songTime - 10_000 && !ready) { // Make sure the audio is fully loaded 10 seconds before it has to go.
                if (this.audio.readyState == 0 || this.audio.readyState == 1)
                    this.audio.load();

                ready = true;
            }

            if ((Date.now() >= this.songTime && !started) || this.run) {
                started = true;
                this.$refs.songsList.disabled = true;
                this.$refs.testButton.disabled = true;

                this.audio.play().then(() => {
                if ('mediaSession' in window.navigator) {
                    window.navigator.mediaSession.setActionHandler('play', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('pause', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
                    window.navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
                }

                if (!runConfetti && this.run) {
                    this.confetti.render();
                    runConfetti = true;
                }
            }).catch(e => {});;
            }

            const date = new Date();

            this.date = date.toLocaleDateString();
            this.time = date.toLocaleTimeString();

            if (Date.now() < startTime) {
                const distance = startTime - Date.now();
            
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                this.countdown = `${pad(Math.abs(days))}:${pad(Math.abs(hours))}:${pad(Math.abs(minutes))}:${pad(Math.abs(seconds))}`;

                if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0 && seconds % 2 == 0) {
                    this.$refs.countdown.style.color = 'rgb(238, 43, 43)';
                } else if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0) {
                    this.$refs.countdown.style.color = 'rgb(168, 209, 243)';
                }
            } else {
                if (!itsNewYear) {
                    itsNewYear = true;
                    this.confetti.render();
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
