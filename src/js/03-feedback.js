import Throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('input[name="email"]');
const formMessage = document.querySelector('textarea[name="message"]');
const myStorage = window.localStorage;
const keyLS = 'feedback-form-state';


if (myStorage.getItem(keyLS)) {
    const currentData = JSON.parse(myStorage.getItem(keyLS));

    formInput.value = currentData.currentEmail;
    formMessage.value = currentData.currentMessage;
}

form.addEventListener('input', Throttle(onFormInput, 500));

function onFormInput(evt) { 
    const formElements = evt.target.form;
    
    const currentEmail = formElements.email.value;
    const currentMessage = formElements.message.value;
    const formDataForLocalStorage = JSON.stringify({currentEmail, currentMessage});
    myStorage.setItem(keyLS, formDataForLocalStorage);

    console.log(formDataForLocalStorage);

}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const submitFormElements = evt.target.elements;
    if (submitFormElements.email.value === '' || submitFormElements.message.value === '') {
        alert('Усі поля форми повинні бути заповнені!')
       
    } else {
        const email = submitFormElements.email.value;
        const message = submitFormElements.message.value;
        const submitFormData = { email, message };
        console.log(submitFormData);
        form.reset();
        myStorage.removeItem(keyLS);
        console.log('localStorage is empty!:', myStorage.getItem(keyLS));
    }
}
