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

const axiosRefreshClient = axios.create({
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
      const logOut = useAuthStore.getState().logOut;
      try {
        const token = useAuthStore.getState().token;
        if (!token) {
          logOut();
        }
        axiosRefreshClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axiosRefreshClient.post(`${coreApi}auth/refresh`);

        const keepToken = useAuthStore.getState().keepToken;
        keepToken(response.data.access_token);
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        return axiosClient(originalRequest);
      } catch (refreshError) {
        logOut();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
