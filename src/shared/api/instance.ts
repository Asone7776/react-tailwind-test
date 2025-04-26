import axios from 'axios';
import * as process from "node:process";

export const instance = axios.create({
    baseURL: process.env.BASE_URL,
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
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
    (response) => response,
    error => {
        return Promise.reject(error);
        // if (error.response.status === 401) {
        //
        // }
        // if (error.response.status === 500) {
        //     console.error(error);
        // }
    }
)
