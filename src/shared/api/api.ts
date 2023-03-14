import axios, { AxiosRequestConfig } from 'axios';
import { USER_LS_KEY } from '@/shared/constants';

// as an another option instead of using .env
// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://advanced-feature.com';

export const api = axios.create({
    baseURL: __API__,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LS_KEY) || '';
    }

    return config;
});
