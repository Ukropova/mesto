import { openFotopopup } from "./index.js";
import { doLike } from "./index.js";
import { deleteCard } from "./index.js";

export class Card {


constructor(title, link, elementTemplate){
  this.title = title.trim();
  this.link = link;
  //this.elementTemplate = elementTemplate;
  this.elementTemplate = document.querySelector('#element-template');
}
_getTemplate(){
  const cardElement = this.elementTemplate.content.cloneNode(true);
  return cardElement;
}
//создание карточки из массива
createCard() {
  this._element = this._getTemplate();
  this._setEventListeners();
  this._element.querySelector('.element__image').src = this.link,
    this._element.querySelector('.element__title').textContent = this.title,
    this._element.querySelector('.element__image').alt = this.title;
  return this._element;
  //elementImage.src = this.link,
  //elementTitle.textContent = this.title,
  //elementImage.alt = this.title;


  //this.openFotopopup(fotopopup);
  //this.doLike(likeButton);
  //this.deleteCard(deleteButton);
}

// _getAddFormValue(event) {
//   event.preventDefault();

//   src = dataLink.value,
//    title = dataTitle.value;
//    dataTitle.value = '';
//    dataLink.value = '';
//    const newCard = new Card().createCard();
//    elementsContainer.prepend(newCard);
//    closePopup(cardPopup);
//  };

_setEventListeners() {
  const fotopopup = this._element.querySelector('.element__image');
  const likeButton = this._element.querySelector('.element__image-heart_button');
  const deleteButton = this._element.querySelector('.element__image-trash_button');
  const formAdd = document.querySelector('#popup__formAdd');

    openFotopopup(fotopopup, this.link, this.title);
    doLike(likeButton);
    deleteCard(deleteButton);
    // formAdd.addEventListener('submit', (e) => {
    //   this._getAddFormValue(e);
    // });

};

};





  //_openFotopopup(photoEl) {
    //photoEl.addEventListener('click', function (event) {
      //imageData.src = this.link;
      //imageData.alt = this.title;
      //labelData.textContent = this.title;
      //this._openPopup(fotoPopup);
    //})
  //};
 // _openPopup = function (popup) {
   // popup.classList.add('popup_opened');
   // document.addEventListener('keydown', closePopupByEsc);//добавление обработчика закрытия попапа по ESC
 // };

 // _doLike(likeButton) {
   // likeButton.addEventListener('click', function (event) {
   //   event.target.classList.toggle('element__image-heart_active');
   // })
 // };

 // _deleteCard(deleteButton) {
  //  deleteButton.addEventListener('click', function (event) {
    //  const listElement = event.target.closest('.element');
    //  listElement.remove();
    //})
 // };


 //const Card = new Card(this.title, this.link);


