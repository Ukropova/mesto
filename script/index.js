const popupElement = document.querySelector('.popup');
const openPopupElement = document.querySelector('.profile__button-pen');
const closePopupElement = document.querySelector('.popup__button-close');
let form = document.querySelector('.popup__form');
const h = document.querySelector('.profile__title');
const p = document.querySelector('.profile__subtitle');
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  console.log('open popup clicked');
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
openPopupElement.addEventListener('click', openPopup);
closePopupElement.addEventListener('click', closePopup);
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
  event.preventDefault();
  const name = form.querySelector('[name="name"]')
  job = form.querySelector('[name="job"]')
  const data = {
    name: name.value,
    job: job.value
  };
  /*h.innerHTML = data.name;
  p.innerHTML = data.job*/
  h.textContent = data.name;
  p.textContent = data.job;
}

