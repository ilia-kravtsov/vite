import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const form = document.getElementById('get-started__form');

const firstName = document.getElementById('firstName');
const firstNameText = document.getElementById('firstNameText');

const lastName = document.getElementById('lastName');
const lastNameText = document.getElementById('lastNameText');

const email = document.getElementById('email');
const emailText = document.getElementById('emailText');

const phone = document.getElementById('phone');
const phoneText = document.getElementById('phoneText');

const textarea = document.getElementById('textarea');
const textareaText = document.getElementById('textareaText');

const validateForm = (values) => {
  const errors = {};

  // first name validation
  if (values.firstNameValue.length === 0) {
    errors.firstName = 'First name is required';
    simplifier(errors.firstName, firstName, firstNameText);
  }
  if (values.firstNameValue.length > 30) {
    errors.firstName = 'First name must not exceed 30 characters';
    simplifier(errors.firstName, firstName, firstNameText);
  }
  if (!/^[a-zA-Z]+$/.test(values.firstNameValue)) {
    errors.firstName = 'First name must contain only English letters';
    simplifier(errors.firstName, firstName, firstNameText);
  }

  // last name validation
  if (values.lastNameValue.length === 0) {
    errors.lastName = 'Last name is required';
    simplifier(errors.lastName, lastName, lastNameText);
  }
  if (values.lastNameValue.length > 30) {
    errors.lastName = 'Last name must not exceed 30 characters';
    simplifier(errors.lastName, lastName, lastNameText);
  }
  if (!/^[a-zA-Z]+$/.test(values.lastNameValue)) {
    errors.lastName = 'Last name must contain only English letters';
    simplifier(errors.lastName, lastName, lastNameText);
  }

  // email validation
  if (values.emailValue.length === 0) {
    errors.email = 'Email is required';
    simplifier(errors.email, email, emailText);
  }
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.emailValue,
    )
  ) {
    errors.email = 'Invalid email format';
    simplifier(errors.email, email, emailText);
  }

  // phone validation
  if (
    !/^\+?\d{1,3}[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/.test(
      values.phoneValue || values.phoneValue.length === 0,
    )
  ) {
    errors.phone = 'Invalid phone number format';
    simplifier(errors.phone, phone, phoneText);
  }

  // textarea validation
  if (values.messageValue.length === 0) {
    errors.message = 'Message is required';
    simplifier(errors.message, textarea, textareaText);
  }
  if (!/^[a-zA-Z0-9.,!?:;'"]+$/.test(values.messageValue)) {
    errors.message =
      'English letters, numbers, punctuation and spaces are allowed';
    simplifier(errors.message, textarea, textareaText);
  }

  return errors;
};

const handleSubmit = (event) => {
  event.preventDefault();

  const firstNameValue = document.getElementById('firstName').value;
  const lastNameValue = document.getElementById('lastName').value;
  const emailValue = document.getElementById('email').value;
  const phoneValue = document.getElementById('phone').value;
  const messageValue = document.getElementById('textarea').value;

  const values = {
    firstNameValue,
    lastNameValue,
    emailValue,
    phoneValue,
    messageValue,
  };

  const errors = validateForm(values);

  if (Object.keys(errors).length === 0) {
    // место для отправки данных на сервер
    console.log('Form submitted with values:', values);
    form.reset();
  } else {
    console.log('Form validation errors:', errors);
  }
};

export const useForm = () => {
  const form = document.getElementById('get-started__form');
  form.addEventListener('submit', handleSubmit);
};

function simplifier(error, fieldName, fieldNameText) {
  Toastify({
    text: error,
    duration: 3000,
    backgroundColor: '#1d1e25',
    gravity: 'bottom',
    position: 'center',
  }).showToast();
  fieldName.classList.add('get-started__form-input--error');
  fieldNameText.classList.add('get-started__form-label-text--error');
  setTimeout(() => {
    fieldName.classList.remove('get-started__form-input--error');
    fieldNameText.classList.remove('get-started__form-label-text--error');
  }, 3000);
}
