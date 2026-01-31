document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeBtn = document.querySelector('.close-video');

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();

      const videoSrc = card.querySelector('video').getAttribute('src');

      modal.classList.add('active');
      modalVideo.src = videoSrc;
      modalVideo.load();
      modalVideo.play(); 
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.removeAttribute('src');
  }

});
