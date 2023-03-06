import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {};

populateInputForm();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(evt) {
  evt.preventDefault();

  if (!evt.target.elements.email.value || !evt.target.elements.message.value) {
    return alert('Заповніть всі поля форми!');
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
function onInputForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInputForm() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(data);

  if (parsedData) {
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
