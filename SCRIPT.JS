const notes = {
  'a': 'C',
  's': 'D',
  'd': 'E',
  'f': 'F',
  'g': 'G',
  'h': 'A',
  'j': 'B',
  'k': 'C-high'
};

document.addEventListener('keydown', (event) => {
  const note = notes[event.key.toLowerCase()];
  if (note) {
    const audio = new Audio(notes/${note}.mp3);
    audio.play();

    const keyElement = document.querySelector(.key[data-note="${note}"]);
    if (keyElement) {
      keyElement.classList.add('active');
      setTimeout(() => keyElement.classList.remove('active'), 200);
    }
  }
});