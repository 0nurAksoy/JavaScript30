let pressingKey = '';
let playAudio = '';

window.addEventListener('keydown', e => {
    pressingKey = document.querySelector(`[data-key="${e.keyCode}"]`);
    playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!playAudio) return;
    playAudio.play();
});