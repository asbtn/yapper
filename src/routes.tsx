import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/features/auth/useAuth';
import FollowersPage from '@/pages/FollowersPage';
import FollowingPage from '@/pages/FollowingPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import ProfilePage from '@/pages/ProfilePage';
import SignupPage from '@/pages/SignupPage';

export function AppRoutes() {
  const { loggedIn } = useAuth();

  return (
    <Routes>
      <Route element={<AppLayout />}> {/* Your header */}
        <Route index element={loggedIn ? <HomePage /> : <Navigate to="/sign-in" />} />
        <Route path="/profile/:handle" element={loggedIn ? <ProfilePage /> : <Navigate to="/sign-in" />} />
        <Route path="/followers" element={loggedIn ? <FollowersPage /> : <Navigate to="/sign-in" />} />
        <Route path="/following" element={loggedIn ? <FollowingPage /> : <Navigate to="/sign-in" />} />
      </Route>
      <Route
        path="/sign-up"
        element={loggedIn ? <Navigate to="/" replace /> : <SignupPage />}
      />
      <Route path="/sign-in" element={loggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
    </Routes>
  );
}
