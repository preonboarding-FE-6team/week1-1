import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_SERVER,
  headers: { 'Content-Type': 'application/json' },
};

export const api = axios.create(DEFAULT_CONFIG);
export const authApi = axios.create(DEFAULT_CONFIG);

api.interceptors.request.use(
  config => config,
  () => ({ message: '런타임 에러가 발생했습니다!' })
);
api.interceptors.response.use(
  config => config,
  error => error.response
);

authApi.interceptors.request.use(
  config => {
    if (localStorage.getItem('authToken')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
    }
    return config;
  },
  () => ({ message: '런타임 에러가 발생했습니다!' })
);
authApi.interceptors.response.use(
  config => config,
  error => error.response
);
