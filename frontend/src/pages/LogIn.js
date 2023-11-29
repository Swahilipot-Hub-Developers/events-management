// components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios or your preferred HTTP request library

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint for your backend
      const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData);
      console.log('Form submitted successfully:', response.data);
      // Optionally, you can handle the response or perform any additional actions
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors or provide user feedback
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center mt-1 mb-5 pb-1">
                      <img src="/images/logo.png"
                        style={{ width: '185px' }} alt="logo" />
                      
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Phone number or email address" />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control" />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                          in</button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">Create new</button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Welcome to Swahilipot Hub Management System</h4>
                    <p className="small mb-0">This is Swahilipot hu event management system where one can create an event 
                    create tickets for the events, input banner for the events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
