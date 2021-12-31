// Safari check
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

// Confetti setup

const ConfettiGeneratorDummy = ConfettiGenerator;
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('confetti');

/**
 * @type {{
    *    render: () => {},
  *      clear: () => {},
 *       appstate: {
            *    target: string, // Id of the canvas
            *      max: number, // Max itens to render
            *     size: number, // prop size
            *      animate: boolean, // Should animate?
            *      respawn: boolean, // Should confettis be respawned when getting out of screen?
            *      props: ('circle' | 'square' | 'triangle' | 'line')[], // Types of confetti
            *      colors: number[][], // Colors to render confetti
            *      clock: number, // Speed of confetti fall
            *      interval?: Timeout, // Draw interval holder
            *      rotate: boolean, // Whenever to rotate a prop
            *      start_from_edge: boolean, // Should confettis spawn at the top/bottom of the screen?
            *      width: number, // canvas width (as int, in px)
            *      height: number // canvas height (as int, in px)
                *}
    }}
 */
const confetti = new ConfettiGeneratorDummy({
    target: canvas,
    rotate: true,
    width: window.innerWidth,
    height: window.innerHeight,
    clock: 35,
    start_from_edge: true,
    respawn: true
});

// Countdown code

const startTime = new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
let songTime = 8932897253497833333;

const SONGS = [
    {
        name: "Technoblade - Blitz",
        url: "https://hermes.bluspring.xyz/blitz.mp3",
        startAt: '23:58:36'
    },
    {
        name: "Wilbur Soot - Your New Boyfriend",
        url: "https://hermes.bluspring.xyz/ynb.mp3",
        startAt: '23:58:48'
    },
    {
        name: 'Glass Animals - Heat Waves',
        url: 'https://hermes.bluspring.xyz/heatwaves.mp3',
        startAt: '23:59:43'
    },
    {
        name: 'Lovejoy - The Fall',
        url: 'https://hermes.bluspring.xyz/thefall.mp3',
        startAt: '23:57:47'
    },
    {
        name: 'Lovejoy - It\'s All Futile! It\'s All Pointless!',
        url: 'https://hermes.bluspring.xyz/iafiap.mp3',
        startAt: '23:58:51'
    },
    {
        name: 'Lovejoy - Model Buses',
        url: 'https://hermes.bluspring.xyz/modelbuses.mp3',
        startAt: '23:57:52'
    }
];

const MESSAGE = `This should play "{name}" the second it reaches {time}, I hope.`;
/**
 * @type {HTMLSelectElement}
 */
const songsList = document.getElementById('song');

SONGS.forEach(song => {
    const option = document.createElement('option');
    option.value = song.name;
    option.innerText = song.name;

    songsList.appendChild(option);
});

console.log(localStorage.getItem('song'))

let currentSong = SONGS.find(a => a.name == window.localStorage.getItem('song')) || SONGS[0];
songsList.value = currentSong.name;

let wakeLock = null;

(async () => {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
    } catch (e) {
        console.error(`Failed to lock the screen from sleeping, device may end up falling asleep before the song starts.`, e);
    }
})();

/**
 * @type {HTMLAudioElement}
 */
let audio = null;

const cloneRequired = document.getElementById('required').cloneNode(true);

document.getElementById('required-btn').onclick = function() {
    audio.load();
    audio.preload = 'metadata';

    document.getElementById('required').remove();
}

function setCurrentSong() {
    currentSong = SONGS.find(a => a.name == songsList.value);
    localStorage.setItem('song', currentSong.name);

    let startAt = currentSong.startAt;

    if (iOSSafari) { // Safari for some reason starts a whole second later, need to compensate.
        const split = startAt.split(':');
        startAt = `${split[0]}:${split[1]}:${parseInt(split[2]) - 1}`;
    }

    songTime = new Date(`Dec 31, ${new Date().getFullYear()} ${startAt}`).getTime();

    document.getElementById('message').innerText = MESSAGE.replace(/{name}/g, currentSong.name).replace(/{time}/g, startAt);

    audio = new Audio();
    audio.src = currentSong.url;
    audio.loop = false;
    audio.load();
}

setCurrentSong();

songsList.onchange = setCurrentSong;

/**
 * @type {HTMLButtonElement}
 */
const testButton = document.getElementById('test');

testButton.onclick = function () {
    testButton.disabled = true;

    const audioCopy = audio;

    audioCopy.currentTime = Math.floor(Math.random() * (audioCopy.duration - 1)) + 1;
    audioCopy.play();

    audioCopy.onplaying = () => {
        setTimeout(() => {
            audioCopy.onplaying = null;

            audioCopy.pause();
            audioCopy.currentTime = 0;
            testButton.disabled = false;
        }, 5000);
    }
}

let started = false;
let itsNewYear = false;

window.onresize = function() {
    if (!itsNewYear) return;

    confetti.clear();

    requestAnimationFrame(function() {
        confetti.appstate.width = window.innerWidth;
        confetti.appstate.height = window.innerHeight;
        confetti.appstate.animate = true;

        confetti.render();
    });
};

if (iOS)
    window.onblur = () => {
        document.body.prepend(cloneRequired);

        document.getElementById('required-btn').onclick = function() {
            if (audio.readyState == 0 || audio.readyState == 1)
                audio.load();
            audio.preload = 'metadata';
        
            document.getElementById('required').remove();
        }
    }

const clock = document.getElementById('clock');

setInterval(() => {
    if (Date.now() >= songTime && !started) {
    //if (true) {
        started = true;
        songsList.disabled = true;
        testButton.disabled = true;

        audio.play();
    }

    const date = new Date();

    clock.innerHTML = `${date.toLocaleDateString()} &nbsp;&nbsp; ${date.toLocaleTimeString()}`;

    if (Date.now() < startTime) {
    //if (false) {
        const distance = Date.now() - startTime;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        if (days.toString().length == 1)
            days = '0' + days;
    
        if (hours.toString().length == 1)
            hours = '0' + hours;
    
        if (minutes.toString().length == 1)
            minutes = '0' + minutes;
    
        if (seconds.toString().length == 1)
            seconds = '0' + seconds;
    
        document.getElementById('countdown').innerHTML = `${pad(Math.abs(days + 1))}:${pad(Math.abs(hours + 1))}:${pad(Math.abs(minutes + 1))}:${pad(Math.abs(seconds + 1))}`;

        if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0 && seconds % 2 == 0) {
            document.getElementById('countdown').style.color = 'rgb(238, 43, 43)';
        } else if (seconds <= 15 && minutes == 0 && hours == 0 && days == 0) {
            document.getElementById('countdown').style.color = 'rgb(168, 209, 243)';
        }
    } else {
        if (!itsNewYear) {
            itsNewYear = true;
            confetti.render();
        }

        document.getElementById('countdown').innerHTML = `00:00:00:00`;
    }
}, 250);

function pad(n) {
    return (n < 10) ? "0" + n : n;
}