
import {enableValidation} from './index.js';
export class FormValidator {
  constructor(objects,  formSelector) {
    this._objects = objects;
    this._formSelector =  formSelector;
  }
  //показать класс с ошибкой
  _showInputError ( inputSelector, errorMessage) {
    const formError = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(this._objects.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._objects.errorClass);
  };
  //удалить класс с ошибкой
  _hideInputError ( inputSelector) {
    const formError = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(this._objects.inputErrorClass);
    formError.classList.remove(this._objects.errorClass);
    formError.textContent = ' ';
  };
  //проверить правильность ввода по типу ошибки
  _checkInputValidity(inputSelector) {
    if (!inputSelector.validity.valid) {
      this._showInputError( inputSelector, inputSelector.validationMessage);
    } else {
      this._hideInputError( inputSelector);
    }
  };
  //найдем все инпуты
  _setEventListeners () {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._objects.inputSelector));
    const buttonElement = this._formSelector.querySelector(this._objects.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, this._objects);
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input',  () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState(inputList, buttonElement,this._objects);
      })
    })
  };
  //поиск и перебор форм на странице
  enableValidation () {
    const formList = Array.from(document.querySelectorAll(this._objects.formSelector));
    formList.forEach(el => {
      el.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      this._setEventListeners();
    })
  };

  //проверка инпута на валидность
  _hasInvalidInput (inputList) {
    return inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    })
  };
  //блокирова кнопки
  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._objects.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.classList.remove(this._objects.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
 

};
