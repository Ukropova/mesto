import { enableValidation } from './index.js';
export class FormValidator {
  constructor(objects, formSelector) {
    this._objects = objects;
    this._formSelector = formSelector;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._objects.inputSelector));
    this._buttonElement = this._formSelector.querySelector(this._objects.submitButtonSelector);
  }
  //показать класс с ошибкой
  _showInputError(inputSelector, errorMessage) {
    this._formError = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(this._objects.inputErrorClass);
    this._formError.textContent = errorMessage;
    this._formError.classList.add(this._objects.errorClass);
  };
  //удалить класс с ошибкой
  _hideInputError(inputSelector) {
    this._formError = this._formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(this._objects.inputErrorClass);
    this._formError.classList.remove(this._objects.errorClass);
    this._formError.textContent = ' ';
  };
  //проверить правильность ввода по типу ошибки
  _checkInputValidity(inputSelector) {
    if (!inputSelector.validity.valid) {
      this._showInputError(inputSelector, inputSelector.validationMessage);
    } else {
      this._hideInputError(inputSelector);
    }
  };
  //найдем все инпуты
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState();
      })
    })
  };

  enableValidation() {
    this._formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  };
  //проверка инпута на валидность
  _hasInvalidInput() {
    return this._inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    })
  };
  //очищение формы
  resetValidation() {
    this._toggleButtonState();// управляем кнопкой
    this._inputList.forEach((inputSelector) => {
      this._hideInputError(inputSelector);//

    });
  };

  //блокирова кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._objects.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    }
    else {
      this._buttonElement.classList.remove(this._objects.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };
};
