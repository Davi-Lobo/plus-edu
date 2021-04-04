import axios from 'axios';

const api = axios.create({
    baseURL: 'https://plus-edu.herokuapp.com/',
});

export default api;