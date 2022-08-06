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
  console.log('loadPage ~ savedData', savedData);

  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
