import { openFotopopup } from "./index.js";
import { doLike } from "./index.js";
import { deleteCard } from "./index.js";

export class Card {
  constructor(title, link, elementTemplate) {
    this.title = title.trim();
    this.link = link;
    this.elementTemplate = elementTemplate;
    this.elementTemplate = document.querySelector('#element-template');
  }

  _getTemplate() {
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
  }

  //общая функция навешивания слушателей
  _setEventListeners() {
    const fotopopup = this._element.querySelector('.element__image');
    const likeButton = this._element.querySelector('.element__image-heart_button');
    const deleteButton = this._element.querySelector('.element__image-trash_button');
    openFotopopup(fotopopup, this.link, this.title);
    doLike(likeButton);
    deleteCard(deleteButton);
  };
};








