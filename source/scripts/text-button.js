const textButton = document.querySelector('.long-path__text-button');
const wrapper = document.querySelector('.long-path__wrapper');

textButton.addEventListener('click', (e) => {
  e.stopPropagation();
  wrapper.classList.add('is-open');
});

function hideText() {
  wrapper.classList.remove('is-open');
}

document.addEventListener('click', hideText);
