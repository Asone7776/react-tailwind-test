import { AUTH_COOKIE_NAME } from '@utils/constants.ts';
import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

interface AuthWrapperProps {
  children: ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const token = Cookies.get(AUTH_COOKIE_NAME);
  if (!token) return <Navigate to={'/'} />;
  return <>{children}</>;
}

export default AuthWrapper;
