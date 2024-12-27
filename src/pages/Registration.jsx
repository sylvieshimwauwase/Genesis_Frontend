import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');  // Add state for first name
  const [lastName, setLastName] = useState('');    // Add state for last name
  const [identifier, setIdentifier] = useState(''); // Holds email or phone number
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  const phoneRegex = /^[0-9]{10}$/; // Validate phone number with exactly 10 digits
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // Password validation

  // Handle registration form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate identifier (email or phone)
    if (!identifier) {
      setError('Please provide an email or phone number.');
      return;
    }
    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      setError('Please provide a valid email or phone number.');
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and include letters, numbers, and symbols.');
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Clear error and handle registration (e.g., send data to the server)
    setError('');
    alert('Account created successfully!');

    // Reset form
    setFirstName('');
    setLastName('');
    setIdentifier('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-md mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            Email or Phone Number
          </label>
          <input
            type="text"
            id="identifier"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your email or phone number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-[#4175B7] text-white rounded-md hover:bg-blue-500"
          >
            Register
          </button>
        </div>
      </form>

      {/* Add link to navigate to login */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
