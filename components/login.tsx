// components/Login.tsx
'use client'
import { useState } from 'react';
import Cookies from "js-cookie";
import { env } from 'process';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    const hardcodedUsername = process.env.NEXT_PUBLIC_ADMIN_NAME;
    const hardcodedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Set the loggedin cookie (or local storage, session storage, etc.) to true
      Cookies.set('loggedin', 'true');
      alert('You are now logged in');

      // Redirect to the admin panel
      window.location.href = '/admin-pannel';
      
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <div className='flex justify-center'>
            <img src="/logo.png" className="h-24 mb-8" alt="Gray House Media Logo" />
          </div> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to admin panel</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="User name"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />

          <button
            onClick={handleLogin}
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
