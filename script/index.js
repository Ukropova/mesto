import { Card } from './card.js';
import { FormValidator } from "./validate.js";

const profilePopup = document.querySelector('.popup_form-edit');
const buttonEdit = document.querySelector('.profile__button-pen');
const buttonCloseEdit = document.querySelector('.popup__button-close_form-edit');
const formEdit = document.querySelector('.popup__formEdit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const dataName = document.querySelector('.popup__field_data_name');
const dataJob = document.querySelector('.popup__field_data_job');

const cardPopup = document.querySelector('.popup_form-add');
const buttonAdd = document.querySelector('.profile__add-button');
const dataTitle = document.querySelector('.popup__field_data_title');
const dataLink = document.querySelector('.popup__field_data_link');
const buttonCloseAdd = document.querySelector('.popup__button-close_form-add');
const formAdd = document.querySelector('#popup__formAdd');
formAdd.addEventListener('submit', getAddFormValue);

const fotoPopup = document.querySelector('.popup_foto');
const imageData = fotoPopup.querySelector('.popup__image_data');
const labelData = fotoPopup.querySelector('.popup__label_data');
const elementTemplate = document.querySelector('#element-template');
const elementsContainer = document.querySelector('.elements');
const buttonCloseFoto = fotoPopup.querySelector('.popup__button-close_foto');

const formList = Array.from(document.querySelectorAll('.popup'));

//функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);//добавление обработчика закрытия попапа по ESC
};

//функция закрытия попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);//удаление обработчика закрытия попапа по ESC
}

//закрытие по фону
function closePopupOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
};

//закрытие по ESC
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//редактирование данных
function getValueFormEdit(event) {
  event.preventDefault();
  profileTitle.textContent = dataName.value;
  profileSubtitle.textContent = dataJob.value;
  closePopup(profilePopup);
}

const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//создание карточки
function createCard(element) {
  const newCard = new Card({ link: element.link, title: element.title }, elementTemplate, openFotopopup);
  const cardElement = newCard.createCard();
  return cardElement;
};
//создание  карточки пользователем
function getAddFormValue(event) {
  event.preventDefault();
  const src = dataLink.value,
    title = dataTitle.value;
  dataTitle.value = '';
  dataLink.value = '';
  elementsContainer.prepend(createCard({ link: src, title }));
  closePopup(cardPopup);
};

//экземпляры карточек
initialCards.forEach((element) => {
  elementsContainer.append(createCard(element));
});

// enableValidation принимает обьект
export const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error_active',
};

//экземпляры форм
const formValidatorFormEdit = new FormValidator(enableValidation, formEdit).enableValidation();
const formValidatorFormAdd = new FormValidator(enableValidation, formAdd);
formValidatorFormAdd.enableValidation();

//открытие попап картинки
export function openFotopopup(src, title) {
  imageData.src = src;
  imageData.alt = title;
  labelData.textContent = title;
  openPopup(fotoPopup);
};

//открытие попап редактирования
buttonEdit.addEventListener('click', function () {
  dataName.value = profileTitle.textContent;
  dataJob.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

//открытие попап добавления карточки
buttonAdd.addEventListener('click', function () {
  openPopup(cardPopup);
  formValidatorFormAdd.resetValidation();
});

//закрытие попап редактирования
buttonCloseEdit.addEventListener('click', function () {
  closePopup(profilePopup)
});

//закрытие попап добавления карточки
buttonCloseAdd.addEventListener('click', function () {
  closePopup(cardPopup)
});

//закрытие попап-картинки
buttonCloseFoto.addEventListener('click', function () {
  closePopup(fotoPopup)
});

//обработчик формы редактирования
formEdit.addEventListener('submit', getValueFormEdit);

//обрабочик закрытия по фону

formList.forEach((popup) => {
  popup.addEventListener('click', closePopupOverlay)
});
