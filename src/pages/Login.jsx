import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
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
        className="bg-white shadow rounded px-8 pt-6 pb-8 mb-20 shadow-[1px_3px_60px_-9px_rgba(0,0,0,0.3)]"
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
        <p className="text-red text-center font-bold  text-sm italic">
          {error}
        </p>

        <div className="flex items-center justify-center">
          <button
            className="w-full block font-bold mb-2 text-2xl text-white bg-rebeccapurple border-rebeccapurple border-2 hover:text-rebeccapurple hover:border-primary hover:bg-white focus:outline-none  font-bold py-1 px-2 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="flex items-center justify-end">
          <p>
            Not a user? &nbsp;
            <Link
              className="underline hover:underline-offset-4 border-gray-500"
              to="/"
            >
              Rgister here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
