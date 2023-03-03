//import { openFotopopup } from "./index.js";
//import { doLike } from "./index.js";
//import { deleteCard } from "./index.js";

export class Card {
  constructor(data, elementTemplate, openFotopopup) {
    this._title = data.title;
    this._link = data.link;
    this._elementTemplate = elementTemplate;
    this._element = this._getTemplate();
    this.openFotopopup = openFotopopup;

  }

  _getTemplate() {
    //const cardElement = this._elementTemplate.content.cloneNode(true);
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  //создание карточки из массива
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link,
      this._element.querySelector('.element__title').textContent = this._title,
      this._element.querySelector('.element__image').alt = this._title;
    return this._element;
  }

  _doLike() {
    this._element.querySelector('.element__image-heart_button').classList.toggle('element__image-heart_active');
  };

  _deleteCard() {
    //this._element.querySelector('.element__image-trash_button').closest('.element');
    this._element.remove();
  };

  //общая функция навешивания слушателей
  _setEventListeners() {
   // const fotopopup = this._element.querySelector('.element__image');
    //const deleteButton = this._element.querySelector('.element__image-trash_button');
    //openFotopopup(fotopopup, this._link, this._title);
    //doLike(likeButton);
    //deleteCard(deleteButton);

    this._element.querySelector('.element__image-heart_button').addEventListener('click', () =>
      this._doLike());
    this._element.querySelector('.element__image-trash_button').addEventListener('click', () =>
      this._deleteCard());


      this._element.querySelector('.element__image').addEventListener('click', () =>
      this.openFotopopup(this._link, this._title))




  };
};




