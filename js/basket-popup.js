const basketLink = document.querySelectorAll(".catalog-button-buy");
const basketPopup = document.querySelector(".modal-cart");
const basketClose = basketPopup.querySelector(".modal-close");
const basketContinue = document.querySelector(".modal-cart-item-right");

basketLink.forEach(function (entry) {
  entry.addEventListener("click", function (evt){
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

basketContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});
