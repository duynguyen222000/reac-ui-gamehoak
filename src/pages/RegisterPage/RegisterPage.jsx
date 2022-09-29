import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [valueinput, setValue] = useState({});
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValue({ ...valueinput, [name]: value });
  };
  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log(valueinput);
  };
  return (
    <div className="container flex justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Fullname
            </label>
            <input
              onChange={handleChangeInput}
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-700 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              onChange={handleChangeInput}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-700 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              onChange={handleChangeInput}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-gray-700 focus:dark:border-violet-400"
            />
          </div>
          <button
            onClick={handleRegisterForm}
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Sign up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Account already exists
          <Link to="/login" className="underline dark:text-gray-100">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
