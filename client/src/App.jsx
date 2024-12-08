// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authContext';
import HomeScreen from './components/HomeScreen';
import AddMail from './components/AddMail';
import HomeScreenTest from './components/HomeScreenTest';
import HowItWorks from './components/HowItWorks';
import SkillsSection from './components/Statestics';

const App = () => {
  const { isAuth } = useAuthContext();
  return (
    <Router >
      <Toaster />
      <div>
        <Navbar />
        <div className='h-[72px]'></div>
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            {/* <HomeScreenTest /> */}
            <FeaturesSection />
            <SkillsSection />
            {/* <TestimonialsSection /> */}
            <HowItWorks />
          </>} />
          <Route path="/login" element={isAuth ? <Navigate to="/get-started" /> : <LoginPage />} />
          <Route path="/signUp" element={isAuth ? <Navigate to="/get-started" /> : <SignupPage />} />
          <Route path="/get-started" element={!isAuth ? <Navigate to="/login" /> : <HomeScreen />} />
          <Route path="/add-mail" element={!isAuth ? <Navigate to="/login" /> : <AddMail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;