import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});
