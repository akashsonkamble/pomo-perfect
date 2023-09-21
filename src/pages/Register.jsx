import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Perform registration logic
    // ...

    // Clear form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 shadow-[1px_3px_60px_-9px_rgba(0,0,0,0.3)]"
        onSubmit={handleSubmit}
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
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
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
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-start text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow border border-gray-50 border-radius-2 rounded w-full py-2 px-3 text-gray-700 focus:border-rebeccapurple active:outline-none focus:outline-none focus:shadow-outline focus:shadow-[1px_3px_35px_-9px_rgba(0,0,0,0.3)]"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            className="w-full block font-bold mb-2 text-2xl text-white bg-Rebeccapurple border-Rebeccapurple border-2 hover:text-Rebeccapurple hover:border-primary hover:bg-white focus:outline-none  font-bold py-1 px-2 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
          {/* <div className="flex items-center justify-end">
            Already a user? &nbsp; <a href="/login">login</a>
          </div> */}
      </form>
    </div>
  );
};

export default Register;
