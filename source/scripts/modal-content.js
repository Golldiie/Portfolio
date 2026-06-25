import { createList } from './helpers.js';

const modal = document.querySelector('.project-modal__inner');
const title = modal.querySelector('.project-modal__title');
const image = modal.querySelector('.project-modal__image');
const description = modal.querySelector('.project-modal__description');
const resultsList = modal.querySelector('#results');
const challengesList = modal.querySelector('#challenges');

const buttonGit = modal.querySelector('#github');
const buttonDemo = modal.querySelector('#preview');

function fillModal(project){
  title.textContent = project.name;
  image.src = project.src;
  image.alt = project.name;
  description.textContent = project.description;

  buttonGit.href = project.github;
  buttonDemo.href = project.preview;

  resultsList.replaceChildren(createList(project.features, 'project-modal__item'));
  challengesList.replaceChildren(createList(project.challenges, 'project-modal__item'));
}

export { fillModal };
