// Abre el modal correspondiente al hacer clic en un <h4>
document.querySelectorAll('.titulo-proyecto').forEach(titulo => {
    titulo.addEventListener('click', () => {
      const modalId = titulo.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });
  
  // Cierra el modal al hacer clic en la X
  document.querySelectorAll('.modal .cerrar').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });
  
  // Cierra el modal al hacer clic fuera del contenido
  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });