import axiosClient from './axiosClient';
import { LoginParams } from './apiTypes';
import { handleResponse } from './handleResponse';

const authApiMethods = {
  login: async (params: LoginParams) => {
    const response = await axiosClient.post('/auth/login', params, {
      validateStatus: () => true,
    });
    return handleResponse(response);
  },

  // registrate: async (params: RegistrationParams) => {
  //   const response = await axiosClient.post('/registration', params);
  //   if (response.status === 200) {
  //     return response.data;
  //   }

  //   if (response.status === 500) {
  //     toast.error(i18n.t('toast.error.server'));
  //   }

  //   throw new Error(response.data.message);
  // },
};

export default { ...authApiMethods };
