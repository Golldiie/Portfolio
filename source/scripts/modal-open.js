const body = document.body;
const modal = document.querySelector('.project-modal');
const closeButton = modal?.querySelector('.project-modal__close');
const projects = document.querySelectorAll('.project-card__preview');

function openModal(){
  modal.classList.remove('visually-hidden');
  body.classList.add('modal-open');
  closeButton.focus();
}

function closeModal(){
  modal.classList.add('visually-hidden');
  body.classList.remove('modal-open');
}

function onDocumentKeydown(evt){
  if (evt.key === 'Escape' && !modal.classList.contains('visually-hidden')) {
    evt.preventDefault();
    closeModal();
  }
}

document.addEventListener('keydown', onDocumentKeydown);

projects.forEach((project) => project.addEventListener('click', openModal));

closeButton.addEventListener('click', () => {
  closeModal();
  document.removeEventListener('keydown', onDocumentKeydown);
});

export { openModal };


