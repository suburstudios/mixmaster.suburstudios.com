document.querySelectorAll('.project-card').forEach(card => {
  const toggle = card.querySelector('.toggle-btn');
  const beforeAudio = card.querySelector('audio.before-audio');
  const afterAudio = card.querySelector('audio.after-audio');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    if(toggle.classList.contains('active')){
      beforeAudio.style.display = 'none';
      afterAudio.style.display = 'block';
      afterAudio.currentTime = 0;
      afterAudio.play();
    } else {
      afterAudio.style.display = 'none';
      beforeAudio.style.display = 'block';
      beforeAudio.currentTime = 0;
      beforeAudio.play();
    }
  });
});
