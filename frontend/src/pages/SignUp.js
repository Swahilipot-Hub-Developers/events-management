import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Reset email error on change
    setEmailError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://your-django-backend/signup/', formData);
      console.log('Signup successful:', response.data);
      // Optionally, handle successful signup, redirect, etc.
    } catch (error) {
      console.error('Error submitting signup form:', error);

      // Check if the error is due to an already registered email
      if (error.response && error.response.status === 409) {
        setEmailError('Email is already registered');
      } else {
        // Handle other errors or provide user feedback
        setEmailError('Error submitting the form. Please try again.');
      }
    }
  };
  return (
    <div className="signup-form mt-5">
      <img
        src="/images/logo.png" // Replace with the path to your logo image
        alt="Logo"
        className="logo"
      />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            type="password"
            id="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account?{' '}
        <Link href="/LogIn">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
