// #BASE_URL = 'https://api.unsplash.com/search/photos';
// #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

import { UnSplash } from "./onSplashApi";
import { createGalleryCards } from '../templates/createGalleryCards';

const refs = {
    gallery: document.querySelector('.js-gallery')
}

const apiService = new UnSplash();

apiService.getPopularImage(1).then(({ results }) => {
    const markUp = createGalleryCards(results);
    console.log(markUp);
    refs.gallery.innerHTML = markUp

})
    .catch(error => console.log(error.message));



