import Axios, { type InternalAxiosRequestConfig } from 'axios';
import { API_URL, API_KEY } from '@/config/config';
import storage from '@/utils/storage';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';

  return config;
}

const axios = Axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY },
});

axios.interceptors.request.use(authRequestInterceptor);

// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axios;
