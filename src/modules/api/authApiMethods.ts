import axiosClient from './axiosClient';
import { LoginParams, RegistrationParams } from './apiTypes';
import { handleResponse } from './handleResponse';

const authApiMethods = {
  login: async (params: LoginParams) => {
    const response = await axiosClient.post('/auth/login', params, {
      validateStatus: () => true,
    });
    return handleResponse(response);
  },

  logout: async () => {
    const response = await axiosClient.post('/auth/logout');
    return handleResponse(response);
  },

  refresh: async () => {
    const response = await axiosClient.post('/auth/refresh');
    return handleResponse(response);
  },

  registrate: async (params: RegistrationParams) => {
    const response = await axiosClient.post('/auth/register', params);
    return handleResponse(response);
  },
};

export default { ...authApiMethods };
