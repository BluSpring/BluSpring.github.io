
/**
 * @type {{[name: string]: {left: string, width: string, name: string}}}
 */
const position_mappings = {
    home: { left: '0.5em', width: '3em', name: 'Home' },
    art: { left: '3.8em', width: '2em', name: 'Art' },
    projects: { left: '6.35em', width: '5em', name: 'Projects' },
    system: { left: '11.775em', width: '4em', name: 'System Specifications' },
    about: { left: '16.05em', width: '3.5em', name: 'About Me' }
};

const selectorSlide = document.getElementById('selector_thing');

let currentPage = '';

function changeScreen(type, ignoreStartTransition = false) {
    if (currentPage == type) return;

    window.location.hash = type;
    document.title = `${position_mappings[type].name} - BluSpring`;

    document.getElementById(type).style.top = '0vh';

    if (!ignoreStartTransition) {
        document.getElementById(currentPage).style.animation = 'fadeOut 0.5s ease-out forwards';
        document.getElementById(`${currentPage}_selector`).classList.remove('selected');
    }
    
    document.getElementById(`${type}_selector`).classList.add('selected');
    selectorSlide.className = `${type}_selected`;
    
    if (!ignoreStartTransition)
        setTimeout(() => {
            document.getElementById(currentPage).style.display = 'none';
            document.getElementById(currentPage).style.top = '-100000vh';
            
            document.getElementById(type).style.display = 'initial';
            document.getElementById(type).style.animation = 'fadeIn 0.5s ease-out forwards';

            currentPage = type;
        }, 500);
    else {
        setTimeout(() => {
            document.getElementById(type).style.display = 'initial';
            document.getElementById(type).style.animation = 'fadeIn 0.5s ease-out forwards';

            currentPage = type;
        }, 250);
    }
}

changeScreen(window.location.hash != '' && Object.keys(position_mappings).includes(window.location.hash.substr(1, window.location.hash.length)) ? window.location.hash.substr(1, window.location.hash.length).toLowerCase() : 'home', true);

let isHovered = false;

for (const name of Object.keys(position_mappings)) {
    document.getElementById(`${name}_selector`).onmouseenter = () => {
        isHovered = true;
        selectorSlide.style.left = '';
    };

    document.getElementById(`${name}_selector`).onclick = () => {
        changeScreen(name);
    }

    document.getElementById(`${name}_selector`).onmouseout = () => {
        isHovered = false;
    };
}

document.getElementById('selector_container').onmousemove = (ev) => {
    if (isHovered) {
        selectorSlide.style.left = '';
    } else {
        selectorSlide.style.left = (ev.offsetX - 50) + 'px';
    }
};

document.getElementById('selector_container').onmouseout = () => {
    selectorSlide.style.left = '';
};

// Art Setup

const files = [
    'Darkened 3',
    'a6d in room',
    'Barrishee (Bloom + Fog Glow)',
    'Kiru and Darkened',
    'Marlowww v1',
    'Kyzen Fire',
    'Realistic Drags',
    'Render of the BladeTM',
    'SBI',
    'Kiru Guitar',
    'More Kiru',
    'Vincent a6d but real cycles II'
].sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

for (const image of files) {
    const imgClass = document.createElement('img');
    imgClass.className = 'render';
    imgClass.src = `assets/img/art/${image}.png`;

    document.getElementById('art_container').appendChild(imgClass);
}