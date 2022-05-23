import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.100.98.226:3333'
})