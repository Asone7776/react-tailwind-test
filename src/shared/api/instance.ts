import axios from 'axios';
import {AUTH_COOKIE_NAME} from "@utils/constants.ts";
import Cookies from 'js-cookie';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
    config => {
        const token = Cookies.get(AUTH_COOKIE_NAME);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const status = (error.response && error.response.status) || 0;
        if (status === 401 && window.location.pathname !== "/") {
            Cookies.remove(AUTH_COOKIE_NAME);
            window.location.href = '/';
        }
        return Promise.reject(error)
    });
