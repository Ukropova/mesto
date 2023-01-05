const popupElement = document.querySelector('.popup');
const openPopupElement = document.querySelector('.profile__button-pen');
const closePopupElement = document.querySelector('.popup__button-close');
let form = document.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
/*const closePopupElementSubmit = document.querySelector('.popup__button-submit');*/
const dataName = document.querySelector('.popup__field_data_name');
const dataJob = document.querySelector('.popup__field_data_job');
const openPopup = function () {
  dataName.value = profileTitle.textContent;
  dataJob.value = profileSubtitle.textContent;
  popupElement.classList.add('popup_opened');
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
function getFormValue(event) {
  event.preventDefault();
  profileTitle.textContent = dataName.value;
  profileSubtitle.textContent = dataJob.value;
  closePopup();
}
openPopupElement.addEventListener('click', openPopup);
closePopupElement.addEventListener('click', closePopup);
form.addEventListener('submit', getFormValue);

