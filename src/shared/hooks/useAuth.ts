import {useState} from "react";
import {LoginFormFields} from "@features/auth/login/model/validation.ts";
import {toast} from 'sonner';
import {instance} from "@shared/api/instance.ts";
import {useNavigate} from 'react-router';
import Cookies from 'js-cookie';
import {User} from "@custom-types/user.ts";
import {AUTH_COOKIE_NAME} from "@utils/constants.ts";
import {isAxiosError} from "axios";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const login = async (data: LoginFormFields) => {
        setLoading(true);
        try {
            const response = await instance.post<User>('/auth/login', data);
            const {access_token} = response.data;
            if (access_token) {
                Cookies.set(AUTH_COOKIE_NAME, access_token);
            }
            toast.success('Вы успешно вошли');
            navigate('/admin', {
                viewTransition: true
            });
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            } else {
                console.log(error);
            }
        } finally {
            setLoading(false);
        }
    }
    return {
        login,
        loading
    }
}