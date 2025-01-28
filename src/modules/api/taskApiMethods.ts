import { newTaskParams } from './apiTypes';
import axiosClient from './axiosClient';
import { handleResponse } from './handleResponse';

const taskApiMethods = {
  getTasks: async () => {
    const response = await axiosClient.get('/tasks');
    return handleResponse(response);
  },

  createTask: async (params: newTaskParams) => {
    const response = await axiosClient.post('/tasks', params);
    return handleResponse(response);
  },
};

export default { ...taskApiMethods };
