import { Navigate } from 'react-router';

function RedirectToAuth() {
  return <Navigate to="/auth" replace />;
}

export default RedirectToAuth;
