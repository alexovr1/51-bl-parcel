import throttle from "lodash.throttle";
import storageApi from "./storage";


const refs = {
    form: document.querySelector('.js-contact-form'),
}

refs.form.addEventListener('input', onInputChange)

const formData = {};

function onInputChange(e) {
    const { name, value } = e.target;
    formData[name] = value;
    storageApi.save('feedback-key', formData)
}