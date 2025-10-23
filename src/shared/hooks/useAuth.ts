import { useCallback, useState } from 'react';
import { LoginFormFields } from '@features/auth/login/model/validation.ts';
import { toast } from 'sonner';
import { instance } from '@shared/api/instance.ts';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { User } from '@custom-types/user.ts';
import { AUTH_COOKIE_NAME } from '@utils/constants.ts';
import { isAxiosError } from 'axios';
import { useProfile } from '@/store/profile-store.ts';

export const useAuth = () => {
  const { setProfile, clearProfile } = useProfile();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async (data: LoginFormFields) => {
    setLoading(true);
    try {
      const response = await instance.post<User>('/auth/login', data);
      setProfile(response.data);
      const { access_token } = response.data;
      if (access_token) {
        Cookies.set(AUTH_COOKIE_NAME, access_token);
      }
      navigate('/admin', {
        viewTransition: true,
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
  };
  const logout = () => {
    Cookies.remove(AUTH_COOKIE_NAME);
    clearProfile();
    navigate('/', {
      viewTransition: true,
    });
  };
  const getProfile = useCallback(
    async (data?: User) => {
      if (!data) {
        const response = await instance.get<User>('/auth/profile');
        setProfile(response.data);
      } else {
        setProfile(data);
      }
    },
    [setProfile],
  );
  return {
    login,
    logout,
    getProfile,
    loading,
  };
};
