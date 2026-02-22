import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';

import { useAuth } from '@/features/auth/useAuth';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';

export function AppRoutes() {
  const { loggedIn } = useAuth();

  return (
    <Routes>
      <Route element={<AppLayout />}> {/* Your header */}
        <Route index element={loggedIn ? <HomePage /> : <Navigate to="/sign-in" />} />
      </Route>
      <Route
        path="/sign-up"
        element={loggedIn ? <Navigate to="/" replace /> : <SignupPage />}
      />
      <Route path="/sign-in" element={<LoginPage />} />
    </Routes>
  );
}
