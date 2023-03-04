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
function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    console.log(e.target.value);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    console.log(formData);
}

function populateInputForm() {
    const parsedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
    const formKeys = JSON.parse(parsedData);
    console.log(`parsedData${parsedData}`);
    console.log(`formKeys${formKeys}`);
    if (parsedData) {
        if (formKeys.email !== undefined) input.value = formKeys.email;
        if (formKeys.message !== undefined) text.value = formKeys.message;
    }
}