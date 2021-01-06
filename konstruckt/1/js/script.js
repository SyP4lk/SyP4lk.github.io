window.onload = () => {
  let play = document.querySelector('#plays'),
      pause = document.querySelector('#pause'),
      audio = document.querySelector('audio');
  play.addEventListener('click', () => {
    play.style.cssText = 'display: none;';
    pause.style.cssText = 'display: block;';
    audio.play();
  })
  pause.addEventListener('click', () => {
    play.style.cssText = 'display: block;';
    pause.style.cssText = 'display: none;';
    audio.pause();
  })
};