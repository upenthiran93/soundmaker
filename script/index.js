const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u'];
const audioFiles = keys.map((key, index) => new Audio(`asset/audio/audio${index}.mp3`));
const buttons = document.querySelectorAll('.sound-button');

const playAudioAndHighlightButton = (index) => {
    buttons.forEach(button => button.classList.remove('keyPressed'));
    buttons[index].classList.add('keyPressed');
    audioFiles[index].play();
    setTimeout(() => buttons[index].classList.remove('keyPressed'), 100);
};

buttons.forEach((button, index) => {
    button.addEventListener('click', () => playAudioAndHighlightButton(index));
});

document.addEventListener('keydown', (event) => {
    const index = keys.indexOf(event.key);
    if (index !== -1) playAudioAndHighlightButton(index);
});