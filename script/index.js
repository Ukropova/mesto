


const profilePopup = document.querySelector('.popup_form-edit');
const ButtonEdit = document.querySelector('.profile__button-pen');
const ButtonCloseEdit = document.querySelector('.popup__button-close_form-edit');
const formEdit = document.querySelector('.popup__formEdit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const dataName = document.querySelector('.popup__field_data_name');
const dataJob = document.querySelector('.popup__field_data_job');

const cardPopup = document.querySelector('.popup_form-add');
const buttonAdd = document.querySelector('.profile__add-button');
const dataTitle = document.querySelector('.popup__field_data_title');
const dataLink = document.querySelector('.popup__field_data_link');
const dataAlt = document.querySelector('.popup__field_data_alt');
const buttonCloseAdd = document.querySelector('.popup__button-close_form-add');
const formAdd = document.querySelector('#popup__formAdd');
formAdd.addEventListener('submit', getAddFormValue);

const fotoPopup = document.querySelector('.popup_foto');
const imageData = fotoPopup.querySelector('.popup__image_data');
const labelData = fotoPopup.querySelector('.popup__label_data');
const elementTemplate = document.querySelector('#element-template');
const elementsContainer = document.querySelector('.elements');
const elementTitle = elementsContainer.querySelector('.element__title');

const buttonCloseFoto = fotoPopup.querySelector('.popup__button-close_foto');

const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

//функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
};

//функция закрытия попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}


//редактирование данных
function getValueFormEdit(event) {
  event.preventDefault();
  profileTitle.textContent = dataName.value;
  profileSubtitle.textContent = dataJob.value;
  closePopup(profilePopup);
}


//создание карточки из массива
function createCart(src, title, alt) {
  const cardElement = elementTemplate.content.cloneNode(true);
  const elementTitle = cardElement.querySelector('.element__title');
  const elementImage = cardElement.querySelector('.element__image');
  const likeButton = cardElement.querySelector('.element__image-heart_button');
  const deleteButton = cardElement.querySelector('.element__image-trash_button');
  const fotopopup = cardElement.querySelector('.element__image');

  elementImage.src = src,
  elementTitle.textContent = title,
  elementImage.alt = alt;

  openFotopopup(fotopopup);
  doLike(likeButton);
  deleteCard(deleteButton);

  return cardElement;
};

initialCards.forEach((element) => {
  elementsContainer.append(createCart(element.link, element.title, element.alt))
});


//создание новой карточки
function getAddFormValue(event) {
  event.preventDefault();
  src = dataTitle.value,
  title = dataLink.value;
  alt = dataAlt.value;
  dataTitle.value = '';
  dataLink.value = '';
  dataAlt.value = '';
  const newCart = createCart(title, src, alt);
  elementsContainer.prepend(newCart);
  closePopup(cardPopup);
};

//добавление лайка
function doLike(likeButton) {
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__image-heart_active');
  })
};

// удаление карточки
function deleteCard(deleteButton) {
  deleteButton.addEventListener('click', function (event) {
    const listElement = event.target.closest('.element');
    listElement.remove();
  })
};

//открытие попап картинки
function openFotopopup(photoEl) {
  photoEl.addEventListener('click', function (event) {
    imageData.src = event.target.src;
    labelData.textContent = event.target.closest('.element').textContent;
    openPopup(fotoPopup);
  })
};

//открытие попап редактирования
ButtonEdit.addEventListener('click', function () {
  dataName.value = profileTitle.textContent;
  dataJob.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});
//открытие попап добавления карточки
buttonAdd.addEventListener('click', function () {
  openPopup(cardPopup);
});
//открытие попап увелечение картинки
imageData.addEventListener('click', function () {
  openPopup(fotoPopup);
});

//закрытие попап редактирования
ButtonCloseEdit.addEventListener('click', function () {
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
