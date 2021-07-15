// basket

const basketLink = document.querySelectorAll('.catalog-button-buy');
const basketPopup = document.querySelector('.modal-cart');
const basketClose = basketPopup.querySelector('.modal-close');
const basketContinue = document.querySelector('.modal-cart-item-right');
const basketContent = document.querySelector('.cart');
const bookmarksAdd = document.querySelectorAll('.catalog-button-bookmarks');
const bookmarksContent = document.querySelector('.bookmarks');

bookmarksAdd.forEach(function (entry) {
  entry.addEventListener('click', function (evt) {
    evt.preventDefault();
    bookmarksContent.classList.add('add-bookmarks');
  });
});

basketLink.forEach(function (entry) {
  entry.addEventListener('click', function (evt) {
    evt.preventDefault();
    basketContent.classList.add('add-cart');
  });
});

basketLink.forEach(function (entry) {
  entry.addEventListener('click', function (evt) {
    evt.preventDefault();
    basketPopup.classList.add('modal-show');
  });
});

basketClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove('modal-show');
});

basketContinue.addEventListener('click', function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      basketPopup.classList.remove('modal-show');
    }
  }
});

// feebback

const feedbackLink = document.querySelector('.feedback-popup');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = feedbackPopup.querySelector('.modal-close');
const feedbackForm = feedbackPopup.querySelector('.feedback-form');
const feedbackName = feedbackPopup.querySelector('.feedback-name');
const feedbackEmail = feedbackPopup.querySelector('.feedback-email');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  feedbackPopup.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-error');

    feedbackPopup.addEventListener('animationend', function () {
      feedbackPopup.classList.remove('modal-error');
    });
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', feedbackName.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
  }
});

// map

const mapLink = document.querySelector('.contacts-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close-map');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});

// slider-services

const tabServices = document.querySelectorAll('.services-item');
const contentItems = document.querySelectorAll('.services-content-item');

const findClearActiveClass = (elements, className = 'services-active') => {
  Array.from(elements).find((item) => item.classList.remove(`${className}`));
};

const setActiveClass = (element, index, className = 'services-active') => {
  element[index].classList.add(`${className}`);
};

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('services-active')) return;

    const currentItem = index;

    findClearActiveClass(tabServices);
    findClearActiveClass(contentItems);

    setActiveClass(tabServices, currentItem);
    setActiveClass(contentItems, currentItem);
  });
};

tabServices.forEach(checkoutTabs);

// slider-promo

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider');
const track = document.querySelector('.slider-list');
const btnPrev = document.querySelector('.slider-button-left');
const btnNext = document.querySelector('.slider-button-right');
const items = document.querySelectorAll('.slider-items');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const btnControlLeft = document.querySelector('.slider-control-item-left');
const btnControlRight = document.querySelector('.slider-control-item-right');

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

btnPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  btnControlLeft.classList.add('control-active');
});

btnNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  btnControlLeft.classList.remove('control-active');
});

btnNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  btnControlRight.classList.add('control-active');
});

btnPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  btnControlRight.classList.remove('control-active');
});

