import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('User registered:', { name, email, password });

    navigate('/signin');
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* Increased max width and padding */}
      <div className="w-full max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-lg"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-lg"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 text-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-500 hover:text-blue-600">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
