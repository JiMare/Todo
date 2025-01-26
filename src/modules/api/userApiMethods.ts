import axiosClient from './axiosClient';
import { handleResponse } from './handleResponse';

const userApiMethods = {
  getUsers: async () => {
    const response = await axiosClient.get('/users');
    return handleResponse(response);
  },
};

export default { ...userApiMethods };
