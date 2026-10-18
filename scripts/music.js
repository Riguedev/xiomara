// Detecta el primer clic del usuario en cualquier parte de la página
  window.addEventListener('load', () => {
    const audio = document.getElementById('miMusica');
    
    // Solo lo reproduce si aún no se está reproduciendo
    if (audio.paused) {
      audio.play().catch(error => console.log("Error al reproducir:", error));
    }
  }, { once: true }); // '{ once: true }' hace que este evento se ejecute una sola vez