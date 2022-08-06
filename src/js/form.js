import throttle from 'lodash.throttle';
import storageApi from './storage';
const STORAGE_KEY = 'feedback-key';
const refs = {
  form: document.querySelector('.js-contact-form'),
};

loadPage();

refs.form.addEventListener('input', onInputChange);

function onInputChange(e) {
  const { name, value } = e.target;
  let savedData = storageApi.load(STORAGE_KEY);
  savedData = savedData ? savedData : {};
  savedData[name] = value;
  storageApi.save(STORAGE_KEY, savedData);
}

function loadPage() {
  const savedData = storageApi.load(STORAGE_KEY);
  // console.log('loadPage ~ savedData', savedData);

  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { name, email, message },
  } = e.currentTarget;

  if (name.value === '' || email.value === '') {
    return console.log('Please fill in all the fields!');
  }
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  console.log(formData);
  storageApi.remove(STORAGE_KEY);
  e.currentTarget.reset();
}
