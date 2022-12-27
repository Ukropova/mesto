const popupElement = document.querySelector('.popup');
const openPopupElement = document.querySelector ('.button-pen');
const closePopupElement = document.querySelector('.popup__button-close');


const openPopup = function() {
  popupElement.classList.add('popup_opened');
  console.log('open popup clicked');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');  
}

openPopupElement.addEventListener('click', openPopup);
closePopupElement.addEventListener('click', closePopup);






let form = document.querySelector('.popup__form');
form.addEventListener('submit', getFormValue);
  function getFormValue (event) {
event.preventDefault();
 const name = form.querySelector('[name="name"]')
 job = form.querySelector('[name="job"]')
const data = {
  name: name.value,
  job: job.value
};
 const h = document.querySelector('.profile__title');
 const p = document.querySelector('.profile__subtitle');
 h.innerHTML = data.name;
 p.innerHTML = data.job;
  }

  