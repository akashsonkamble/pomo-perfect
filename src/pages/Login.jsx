import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

 
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!login) {
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log("User registered:", data);
          navigate("/home");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("Email is already in use.");
          } else {
            setError(error.message);
          }
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 shadow-[1px_3px_60px_-9px_rgba(0,0,0,0.3)]"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-start text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow border border-gray-50 border-radius-2 rounded w-full py-2 px-3 text-gray-700 focus:border-rebeccapurple active:outline-none focus:outline-none focus:shadow-outline focus:shadow-[1px_3px_35px_-9px_rgba(0,0,0,0.3)]"
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-start text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow border border-gray-50 border-radius-2 rounded w-full py-2 px-3 text-gray-700 focus:border-rebeccapurple active:outline-none focus:outline-none focus:shadow-outline focus:shadow-[1px_3px_35px_-9px_rgba(0,0,0,0.3)]"
            id="password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            placeholder="Password"
            required
          />
        </div>
        {error && <p className="text-red text-xs italic">{error}</p>}

        <div className="flex items-center justify-center">
          <button
            className="w-full block font-bold mb-2 text-2xl text-white bg-rebeccapurple border-rebeccapurple border-2 hover:text-rebeccapurple hover:border-primary hover:bg-white focus:outline-none  font-bold py-1 px-2 rounded"
            type="submit"
          >
            {login ? "Login" : "Register"}
          </button>
        </div>
        <div className="flex items-center justify-end">
          <p>
            {login ? "Not a user?" : "Already a user?"} &nbsp;
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setLogin(!login)}
            >
              {login ? (
                <span className="underline hover:underline-offset-4 border-gray-500">
                  Register here
                </span>
              ) : (
                <span className="underline hover:underline-offset-4 border-gray-500">
                  Login here
                </span>
              )}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
