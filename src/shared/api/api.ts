import axios from 'axios';
import { USER_LS_KEY } from 'shared/constants';

// as an another option instead of using .env
// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://advanced-feature.com';

export const api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LS_KEY),
    },
});
