const openButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[data-modal-close]');

openButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById(btn.dataset.modalOpen);
    modal.hidden = false;
    document.body.classList.add('no-scroll');
  });
});

function closeModal(modal) {
  modal.hidden = true;
  document.body.classList.remove('no-scroll');
}

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal:not([hidden])').forEach(closeModal);
  }
});