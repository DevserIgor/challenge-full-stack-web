import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { api };
