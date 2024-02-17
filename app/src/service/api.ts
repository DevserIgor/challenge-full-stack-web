import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((request) => {
  const { getToken } = useAuth();
  request.headers.set('Authorization', `Bearer ${getToken()}`);

  return request;
});

export { api };
