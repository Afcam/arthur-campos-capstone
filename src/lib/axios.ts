import Axios, { type InternalAxiosRequestConfig } from 'axios';
import { API_URL, API_KEY } from '@/config/config';
import storage from '@/utils/storage';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken;
  if (token) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY },
});

axios.interceptors.request.use(authRequestInterceptor);

// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;
//     useNotificationStore.getState().addNotification({
//       type: 'error',
//       title: 'Error',
//       message,
//     });

//     return Promise.reject(error);
//   }
// );
