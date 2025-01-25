import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';

const coreApi = import.meta.env.VITE_APP_CORE_API;
const apiKey = import.meta.env.VITE_APP_API_KEY;

console.log(import.meta.env);

console.log(coreApi, 'api', apiKey);

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

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = useAuthStore.getState().token;
        const response = await axios.post(`${coreApi}/auth/refresh`, { refresh_token: refreshToken });

        const keepToken = useAuthStore.getState().keepToken;
        keepToken(response.data.access_token);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        return axiosClient(originalRequest);
      } catch (refreshError) {
        const logOut = useAuthStore.getState().logOut;
        logOut();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
