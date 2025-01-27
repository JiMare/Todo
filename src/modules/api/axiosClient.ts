import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';

const coreApi = import.meta.env.VITE_APP_CORE_API;
const apiKey = import.meta.env.VITE_APP_API_KEY;

const axiosClient = axios.create({
  baseURL: coreApi,
  headers: {
    'Content-type': 'application/json',
    'X-AUTH-KEY': apiKey,
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
