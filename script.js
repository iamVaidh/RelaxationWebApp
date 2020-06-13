const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = 'Breath in! &#128519;';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerHTML = 'Hold in! &#128521;';

        setTimeout(() => {
            text.innerHTML = 'Breathe out! &#128522;';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);