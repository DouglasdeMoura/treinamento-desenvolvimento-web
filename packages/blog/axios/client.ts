import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://google.com/api/'
})
