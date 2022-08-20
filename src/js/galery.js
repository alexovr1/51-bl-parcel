// #BASE_URL = 'https://api.unsplash.com/search/photos';
// #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { UnSplash } from './onSplashApi';
import { createGalleryCards } from '../templates/createGalleryCards';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  container: document.querySelector('#tui-pagination-container'),
  form: document.querySelector('.js-search-form'),
};
const options = {
  totalItems: 0,
  itemsPerPage: 15,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(refs.container, options);

const page = pagination.getCurrentPage();
console.log(page);

const apiService = new UnSplash();

apiService
  .getPopularImage(page)
  .then(({ results, total }) => {
    const markUp = createGalleryCards(results);
    pagination.reset(total);
    refs.gallery.innerHTML = markUp;
  })
  .catch(error => console.log(error.message));

pagination.on('afterMove', updatePagination);

function updatePagination(e) {
  const currentPage = e.page;
  apiService
    .getPopularImage(currentPage)
    .then(({ results }) => {
      const markUp = createGalleryCards(results);
      refs.gallery.innerHTML = markUp;
    })
    .catch(error => console.log(error.message));
}
const handalSubmit = event => {
  event.preventDefault();
  const { query } = event.currentTarget.elements;
  const value = query.value.trim();
  console.log(query);
  console.log(value);
};
refs.form.addEventListener('submit', handalSubmit);
