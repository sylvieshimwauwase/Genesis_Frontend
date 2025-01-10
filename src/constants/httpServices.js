import axios from 'axios';
import apiUrl from './apiUrl';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add custom headers here
    // For example, adding an Authorization token
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;