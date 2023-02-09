//показать класс с ошибкой
const showInputError = (formSelector, inputSelector, errorMessage) => {
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__field_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__field-error_active');
};
//удалить класс с ошибкой
const hideInputError = (formSelector, inputSelector) => {
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__field_type_error');
  formError.classList.remove('popup__field-error_active');
  formError.textContent = ' ';
};
//проверить правильность ввода по типу ошибки
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};
//найдем все инпуты
const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__field'));
  const buttonElement = formSelector.querySelector('.popup__button-submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, buttonElement);
    })
  })
};
//поиск и перебор форм на странице
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formSelector);
  })
};
//проверка инпута на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
};
//блокирова кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button-submit_inactive');
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove('popup__button-submit_inactive');
    buttonElement.removeAttribute('disabled');
  }
};
enableValidation();
