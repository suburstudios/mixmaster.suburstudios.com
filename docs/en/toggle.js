toggle.addEventListener('click', () => {
  activeIsAfter = !activeIsAfter;
  toggle.classList.toggle('active', activeIsAfter);
  if(isPlaying){
    crossfade(activeIsAfter, 0.12); // Función que ya tienes en tu script
  } else {
    beforeGainNode.gain.value = activeIsAfter ? 0 : 1;
    afterGainNode.gain.value  = activeIsAfter ? 1 : 0;
  }
});
