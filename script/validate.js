//показать класс с ошибкой
const showInputError = (formSelector, inputSelector, errorMessage, objects) => {
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(objects.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(objects.errorClass);
};
//удалить класс с ошибкой
const hideInputError = (formSelector, inputSelector, objects) => {
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(objects.inputErrorClass);
  formError.classList.remove(objects.errorClass);
  formError.textContent = ' ';
};
//проверить правильность ввода по типу ошибки
const checkInputValidity = (formSelector, inputSelector, objects) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, objects);
  } else {
    hideInputError(formSelector, inputSelector, objects);
  }
};
//найдем все инпуты
const setEventListeners = (formSelector, objects) => {
  const inputList = Array.from(formSelector.querySelectorAll(objects.inputSelector));
  const buttonElement = formSelector.querySelector(objects.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, objects);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector, objects);
      toggleButtonState(inputList, buttonElement, objects);
    })
  })
};
//поиск и перебор форм на странице
const enableValidation = (objects) => {
  const formList = Array.from(document.querySelectorAll(objects.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formSelector, objects);
  })
};
//проверка инпута на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
};
//блокирова кнопки
const toggleButtonState = (inputList, buttonElement, objects) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objects.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove(objects.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};
//функция enableValidation принимает обьект
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error_active',
});
