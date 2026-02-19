import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export function AppRoutes() {
  const { loggedIn } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn ? <HomePage /> : <Navigate to="/sign-in" replace />}
      />
      <Route
        path="/sign-in"
        element={loggedIn ? <Navigate to="/" replace /> : <LoginPage />}
      />
    </Routes>
  );
}
