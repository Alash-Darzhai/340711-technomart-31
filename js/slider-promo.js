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
