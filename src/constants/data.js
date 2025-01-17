import axiosInstance from './httpServices';

const apiEndpoints = {
    levels: 'http://127.0.0.1:8000/api/levels/',
    courses: 'http://127.0.0.1:8000/api/courses/',
    classes: 'http://127.0.0.1:8000/api/classes/',
    lessons: 'http://127.0.0.1:8000/api/lessons/',
    exams: 'http://127.0.0.1:8000/api/exams/',
    notes: 'http://127.0.0.1:8000/api/notes/',
    books: 'http://127.0.0.1:8000/api/books/',
    works: 'http://127.0.0.1:8000/api/works/',
    schemes_of_work: 'http://127.0.0.1:8000/api/schemes_of_work/',
    lesson_plans: 'http://127.0.0.1:8000/api/lesson_plans/',
    logout: 'http://127.0.0.1:8000/api/logout/',
    profile: 'http://127.0.0.1:8000/api/profile/',
    password_reset: 'http://127.0.0.1:8000/api/password-reset/',
    password_reset_confirm: 'http://127.0.0.1:8000/api/password-reset-confirm/',
    download_payment: 'http://127.0.0.1:8000/api/download-payment/',
    download_history: 'http://127.0.0.1:8000/api/download-history/',
};

const apiService = {
    getAll: async (endpoint) => {
        try {
            const response = await axiosInstance.get(apiEndpoints[endpoint]);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            throw error;
        }
    },

    getOne: async (endpoint, id) => {
        try {
            const response = await axiosInstance.get(`${apiEndpoints[endpoint]}${id}/`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${endpoint} with id ${id}:`, error);
            throw error;
        }
    },

    create: async (endpoint, data) => {
        try {
            const response = await axiosInstance.post(apiEndpoints[endpoint], data);
            return response.data;
        } catch (error) {
            console.error(`Error creating ${endpoint}:`, error);
            throw error;
        }
    },

    update: async (endpoint, id = '', data) => {
        try {
            const url = id ? `${apiEndpoints[endpoint]}${id}/` : apiEndpoints[endpoint];
            const response = await axiosInstance.put(url, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating ${endpoint}${id ? ` with id ${id}` : ''}:`, error);
            throw error;
        }
    },

    delete: async (endpoint, id) => {
        try {
            const response = await axiosInstance.delete(`${apiEndpoints[endpoint]}${id}/`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting ${endpoint} with id ${id}:`, error);
            throw error;
        }
    },
};

export default apiService;