import axios from 'axios';
import apiUrl from './apiUrl';
// import refreshToken from './refreshToken';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 10000, // 10 seconds timeout
  // withCredentials: true, // Send cookies with requests
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add custom headers here
//     // For example, adding an Authorization token
//     // config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
//
// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         const newToken = await refreshToken();
//         error.config.headers['Authorization'] = `Bearer ${newToken}`;
//         return axiosInstance.request(error.config);
//       } catch (refreshError) {
//         console.error('Error in response interceptor:', refreshError);
//         window.location.href = '/login'; // Redirect to login if refresh fails
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;