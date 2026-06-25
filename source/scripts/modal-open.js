import { PROJECTS } from './project-data.js';
import { openModal, closeModal } from './helpers.js';
import { fillModal } from './modal-content.js';

const body = document.body;
const modal = document.querySelector('.project-modal');
const closeButton = modal.querySelector('.project-modal__close');
const projects = document.querySelectorAll('.project-card__preview');

function onDocumentKeydown(evt){
  if (evt.key === 'Escape' && !modal.classList.contains('visually-hidden')) {
    evt.preventDefault();
    closeModal(modal, body);
  }
}

function showProject(project) {
  fillModal(project);
  openModal(modal, body);
}

document.addEventListener('keydown', onDocumentKeydown);

projects.forEach((projectButton) => projectButton.addEventListener('click', (evt) => {
  const projectId = evt.currentTarget.dataset.project;
  showProject(PROJECTS[projectId]);
}));

closeButton.addEventListener('click', () => {
  closeModal(modal, body);
  document.removeEventListener('keydown', onDocumentKeydown);
});

export { openModal };


