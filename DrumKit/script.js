function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

function playSound (e) {
    const pressingKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!playAudio) return;
    
    pressingKey.classList.add('playing');
    playAudio.currentTime = 0;
    playAudio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);