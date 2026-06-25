function createElement(tag, className, text = '') {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function createList(items, className) {
  const fragment = document.createDocumentFragment();

  items.forEach((itemText) => {
    const item = createElement('li', className, itemText);
    fragment.append(item);
  });

  return fragment;
}

function openModal(element, wrapper){
  element.classList.remove('visually-hidden');
  wrapper.classList.add('modal-open');
}

function closeModal(element, wrapper){
  element.classList.add('visually-hidden');
  wrapper.classList.remove('modal-open');
}

export { openModal, closeModal, createList };
