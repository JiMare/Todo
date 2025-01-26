import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleResponse = (response: AxiosResponse<any, any>) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  if (response.status >= 400 && response.status <= 500) {
    toast.error(response.data.message);
  }
  throw new Error(response.data.message);
};
