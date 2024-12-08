// src/components/LoginPage.js
import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useLogin()
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

    console.log(Email, Password);

    await login({ Email, Password });
  };

  return (
    <div className='flex position-relative h-[89vh] justify-center items-center'>
      <div className="d-flex flex-column align-items-center w-lg-50 px-3 px-lg-5 pt-5">
        <div className="w-100 mt-auto" style={{ maxWidth: '526px' }}>
          <h1 className='text-3xl md:text-4xl font-bold'>Sign in to FormsFlow</h1>
          <p className="pb-3 mb-3 mb-lg-4 mt-2">
            Don't have an account yet?&nbsp;&nbsp;
            <Link to="/signup" className='text-blue-800'>Register here!</Link>
          </p>
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="pb-3 mb-3">
              <div className="position-relative">
                <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input
                  className="form-control form-control-lg ps-5"
                  type="email"
                  value={Email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="position-relative">
                <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <div className="password-toggle">
                  <input
                    className="form-control form-control-lg ps-5"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input
                      className="password-toggle-check"
                      type="checkbox"
                      checked={showPassword}
                      onChange={togglePasswordVisibility}
                    />
                    <span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
              <a
                className="fs-sm fw-semibold text-decoration-none my-1"
                href="account-password-recovery.html"
              >
                Forgot password?
              </a>
            </div>
            <button className="btn btn-lg btn-primary bg-blue-700 hover:bg-blue-800 w-100 mb-4" type="submit">
              Sign in
            </button>
          </form>
        </div>
        <p
            className="nav w-100 fs-sm pt-5 mt-auto mb-2"
            style={{ maxWidth: '526px' }}
          >
          </p>
      </div>
      <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center h-100 hidden md:block" style={{ backgroundImage: "url('assets/Laptop-Image.jpg')" }}></div>
    </div>
  );
};

export default LoginPage;