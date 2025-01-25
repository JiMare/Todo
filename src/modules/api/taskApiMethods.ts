import axiosClient from './axiosClient';
import { handleResponse } from './handleResponse';

const taskApiMethods = {
  getTasks: async () => {
    const response = await axiosClient.get('/tasks');
    return handleResponse(response);
  },
};

export default { ...taskApiMethods };
