const PROJECTS = {
  project1: {
    name: 'Sedona',
    src: '../images/modal/project-1.jpg',
    description: 'Сверстала формы, каталог, popup и интерактивные элементы интерфейса',
    features: ['главная страница', 'каталог гостиниц', 'форма поиска', 'модальное окно','семантичная разметка','интерактивные состояния элементов'],
    challenges: ['настройка сетки flex/grid','работа с формами и модальными окнами'],
    github: 'https://github.com/Golldiie/Sedona',
    preview: 'https://golldiie.github.io/Sedona/'
  },

  project2: {
    name: 'Cat energy',
    src: '../images/modal/project-2.jpg',
    description: 'Сверстала адаптивный сайт mobile-first с использованием SASS по методологии БЭМ',
    features: ['адаптивная верстка','чистый & масштабируемый код', 'мобильное интерактивное меню', 'интерактивная карта и другие элементы','сборка проекта на Gulp'],
    challenges: ['построение адаптивной сетки', 'реализация разных макетов по pixel perfect', 'работа с современными CSS-возможностями'],
    github: 'https://github.com/Golldiie/Cat-energy-2.0',
    preview: 'https://golldiie.github.io/Cat-energy-2.0/10'
  },

  project3: {
    name: 'Kekstagram',
    src: '../images/modal/project-3.jpg',
    description: 'Реализовала загрузку изображений, фильтры на базе noUiSlider, валидацию форм через Pristine и взаимодействие с сервером через Fetch API',
    features: ['загрузка изображений', 'изменение масштаба фотографии', 'применение фильтров, изменение количества', 'валидация пользовательских данных', 'работа с удалённым API','просмотр фото пользователей','фильтрация фотографий'],
    challenges: ['работа с асинхронными запросами', 'реализация валидации хэштегов', 'управление состоянием интерфейса и модальных окон'],
    github: 'https://github.com/Golldiie/Kekstagram',
    preview: 'https://golldiie.github.io/Kekstagram/'
  }
};

export { PROJECTS };
