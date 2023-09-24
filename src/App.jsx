import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import RegisterPage from "./pages/Register";

function App() {
  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={isLoggedIn ? <Navigate to="/home" /> : <RegisterPage />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
