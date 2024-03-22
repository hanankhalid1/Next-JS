"use client";
import React, { useState } from "react";
import { auth } from "@/app/firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      //@ts-ignore
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("Error signing up:", err.message);
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className={`h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSignup}
          className="w-full max-w-sm bg-gray-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl mb-4 text-center dark:text-black">Sign Up</h2>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 dark:text-black"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 dark:text-black"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="absolute top-0 right-0 m-4 flex items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-gray-200 hover:text-gray-400 focus:outline-none ${
            darkMode ? "text-gray-400" : "text-gray-200"
          }`}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {darkMode ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9999 2.00003C6.46985 2.00003 2 6.46988 2 12.0001C2 17.5301 6.46985 22 11.9999 22C17.53 22 21.9999 17.5301 21.9999 12.0001C21.9999 6.46988 17.53 2.00003 11.9999 2.00003ZM11.9999 20.0001C7.58182 20.0001 4.00007 16.4183 4.00007 12.0001C4.00007 7.582 7.58182 4.00025 11.9999 4.00025C16.4181 4.00025 19.9999 7.582 19.9999 12.0001C19.9999 16.4183 16.4181 20.0001 11.9999 20.0001Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47716 2 2 6.47716 2 12C2 17.5228 6.47716 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47716 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
              />
            )}
          </svg>
        </button>
        <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
}

export default Signup;
