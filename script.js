const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const hero = document.getElementById('hero');

playBtn.addEventListener('click', ()=>{ audio.play(); });
pauseBtn.addEventListener('click', ()=>{ audio.pause(); });

hero.addEventListener('click', ()=>{
  hero.classList.toggle('zoom');
});
