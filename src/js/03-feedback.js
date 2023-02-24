import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const text = document.querySelector('textarea');
const input = document.querySelector('input');

let formData = {};

populateInputForm();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}
function onInputForm(evt) {
    formData(e.target.name) = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInputForm() {
    const parsedData = localStorage.getItem(STORAGE_KEY);
    if (parsedData) {
        const formKeys = JSON.parse(parsedData);
        if (formKeys.email !== undefined) input.value = formKeys.email;
        if (formKeys.message !== undefined) text.value = formKeys.message;
    }
}