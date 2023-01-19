const popupElement = document.querySelector('.Popup__form-edit');
const openPopupElement = document.querySelector('.profile__button-pen');
const closePopupElement = document.querySelector('.popup__button-close_form-edit');
const form = document.querySelector('.popup__formEdit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const dataName = document.querySelector('.popup__field_data_name');
const dataJob = document.querySelector('.popup__field_data_job');
//открытие попап редактирования
const openPopup = function () {
  dataName.value = profileTitle.textContent;
  dataJob.value = profileSubtitle.textContent;
  popupElement.classList.add('popup_opened');
}
//закрытие попап редактирования
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
//редактирование данных
function getFormValu(event) {
  event.preventDefault();
  profileTitle.textContent = dataName.value;
  profileSubtitle.textContent = dataJob.value;
  closePopup();
}
openPopupElement.addEventListener('click', openPopup);
closePopupElement.addEventListener('click', closePopup);
form.addEventListener('submit', getFormValu);


const popupAddElement = document.querySelector('.Popup__form-add');
const openAddPopupElement = document.querySelector('.profile__add-button');
const dataTitle = document.querySelector('.popup__field_data_title');
const dataLink = document.querySelector('.popup__field_data_link');
const buttonLike = document.querySelector('.element__image-heart_button');
//открытие попап добавления карточки
const openAddPopup = function () {
  popupAddElement.classList.add('popup_opened');
}
openAddPopupElement.addEventListener('click', openAddPopup);
const closeAddPopupElement = document.querySelector('.popup__button-close_form-add');
//закрытие попап добавления карточки
const closeAddPopup = function () {
  popupAddElement.classList.remove('popup_opened');
}
closeAddPopupElement.addEventListener('click', closeAddPopup);
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
const elementTemplate = document.querySelector('#element-Template');
const elements = document.querySelector('.elements');
//создание массива
function createCart(initialCards) {
  for (let i = 0; i < initialCards.length; i++) {
    console.log(elementTemplate);
    const cardElement = elementTemplate.content.cloneNode(true);
    const elementTitle = cardElement.querySelector('.element__title');
    const elementImage = cardElement.querySelector('.element__image');
    elementImage.src = initialCards[i].link,
      elementTitle.textContent = initialCards[i].title,
      elements.appendChild(cardElement);
  }
}
//создание новой карточки
createCart(initialCards);
const formAdd = document.querySelector('#popup__formAdd');
formAdd.addEventListener('submit', getFormValue);
function getFormValue(event) {
  event.preventDefault();
  const dataForm = {
    title: dataTitle.value,
    link: dataLink.value
  }
  initialCards.unshift(dataForm);
  elements.innerHTML = '';
  createCart(initialCards);
  closeAddPopup();
  doLike();
  deleteCard();
  openFotoPopup();

};
//добавление лайка
function doLike() {
  const buttonLike = document.getElementsByClassName('element__image-heart_button');
  Array.from(buttonLike).forEach((element) => element.addEventListener('click', function () {
    element.classList.toggle('element__image-heart_active');
  }
  ));
}
doLike();
// удаление карточки
function deleteCard() {
  const deleteButton = document.querySelectorAll('.element__image-trash_button');
  deleteButton.forEach((element) => {
    element.addEventListener('click', function (event) {
      const listElement = event.target.closest('.element');
      listElement.remove();
    })
  });
};
deleteCard();
//открытие попап картинки
const popupFotoElement = document.querySelector('.popup__foto');
const imageData = popupFotoElement.querySelector('.popup__image_data');
const labelData = popupFotoElement.querySelector('.popup__label_data');
const elementTitle = elements.querySelector('.element__title');

function openFotoPopup() {
  const openFotoPopupElements = elements.querySelectorAll('.element__image');
  const openFotoPopupElementsArray = Array.from(openFotoPopupElements);
  openFotoPopupElementsArray.forEach((element) => {
    element.addEventListener('click', function (event) {
      console.log('ok');
      console.log(event.target);
      imageData.src = event.target.src,
        labelData.textContent = event.target.closest('.element').textContent;

      popupFotoElement.classList.add('popup_opened');
    })
  });
};
openFotoPopup();

//закрытие попап-картинки
const closeFotoPopupElement = popupFotoElement.querySelector('.popup__button-close_foto');
const closeFotoPopup = function () {
  popupFotoElement.classList.remove('popup_opened');
}
closeFotoPopupElement.addEventListener('click', closeFotoPopup);

