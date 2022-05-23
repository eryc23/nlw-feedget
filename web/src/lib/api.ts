import axios from 'axios';

const {API_URL} = import.meta.env;

export const api = axios.create({
    baseURL: API_URL
})