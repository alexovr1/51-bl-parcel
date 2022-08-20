export class UnSplash {
    #BASE_URL = 'https://api.unsplash.com/search/photos';
    #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
    #searchParams = new URLSearchParams({
        per_page: 15,
        client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
        color: 'black_and_white',
        orientation: 'portrait',
    })
    #query
    constructor() {
        this.#query = '';
    }
    getPopularImage(page) {
        const Url = `${this.#BASE_URL}?page=${page}&query=cats&${this.#searchParams}`
        return fetch(Url).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
    }
    getImagebyQuery(page) {
        const Url = `${this.#BASE_URL}?page=${page}&query=${this.#query}&${this.#searchParams}`
        return fetch(Url).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
    }
    set query (newQuery){
        this.#query=newQuery
    }
}

const URL = 'https://api.unsplash.com/search/photos?page=1&query=cats&client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc'
