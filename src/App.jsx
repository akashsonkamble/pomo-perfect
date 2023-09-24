import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import Register from "./pages/Register";

function App() {
  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={isLoggedIn ? <Navigate to="/home" /> : <Register />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <HomePage /> : <Login />}
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
