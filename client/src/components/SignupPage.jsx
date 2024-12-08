// src/components/SignupPage.js
import React, { useState } from 'react';
import { useSignUp, useSignUpValidation } from '../hooks/useSignUp';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const { signUp } = useSignUp();
  const { signUpValidation } = useSignUpValidation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Otp, setOtp] = useState('');
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle signup logic here
    await signUp({ Email, Password, Name });
    setIsVisible(true);
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // Handle signup logic here
    await signUpValidation({ Email, Otp });
  };

  return (
    <div className='flex position-relative h-[89vh] justify-center items-center'>
      {
        !isVisible ? <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
          <div className="w-100 mt-auto" style={{ maxWidth: '526px' }}>
            <h1 className='text-3xl md:text-4xl font-bold'>No account? Sign up</h1>
            <p className="pb-3 mb-3 mb-lg-4 mt-2">
              Have an account already?&nbsp;&nbsp;
              <Link to="/login" className='text-blue-800'>Sign in here!</Link>
            </p>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col mb-4">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="col mb-4">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    value={Email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="password-toggle mb-4">
                <input
                  className="form-control form-control-lg"
                  type={showPassword ? 'text' : 'password'}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
              <div className="password-toggle mb-4">
                <input
                  className="form-control form-control-lg"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={ConfirmPassword}
                  onChange={(e)=>{setConfirmPassword(e.target.value)}}
                  placeholder="Confirm password"
                  required
                />
                <label className="password-toggle-btn" aria-label="Show/hide password">
                  <input
                    className="password-toggle-check"
                    type="checkbox"
                    checked={showConfirmPassword}
                    onChange={toggleConfirmPasswordVisibility}
                  />
                  <span className="password-toggle-indicator"></span>
                </label>
              </div>
              <div className="pb-4">
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" id="terms" required />
                  <label className="form-check-label ms-1" htmlFor="terms">
                    I agree to <a href="#">Terms &amp; Conditions</a>
                  </label>
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-100 mb-4 bg-blue-700 hover:bg-blue-800" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <p
            className="nav w-100 fs-sm pt-5 mt-auto mb-2"
            style={{ maxWidth: '526px' }}
          >
          </p>
        </div> : <div className="w-lg-50 px-3 flex justify-center items-center">
          <div className="w-100 mt-auto " style={{ maxWidth: '526px' }}>
            <h1 className='text-4xl font-bold'>No account? Sign up</h1>
            <form onSubmit={handleSubmit2} className="max-w-md mt-8">
              <p>We have Sent an otp to {Email}</p>
              <div className="mb-4">
                <div className="password-toggle mb-4">
                <input
                  className="form-control form-control-lg"
                  type={showPassword ? 'text' : 'password'}
                  value={Otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Otp"
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
              <button type="submit" className="btn btn-lg btn-primary w-100 mb-4 bg-blue-700 hover:bg-blue-800 transition duration-300">
                Confirm
              </button>
            </form>
          </div>
        </div>
      }
      <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center h-100 hidden md:block" style={{ backgroundImage: "url('assets/Laptop-Image.jpg')" }}></div>
    </div>
  );
};

export default SignupPage;