import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/features/auth/useAuth';

const ProtectedRoute = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
