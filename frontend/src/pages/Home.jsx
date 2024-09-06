import React from "react";
import logo from "../asset/logo.jpg";
import pmi from "../asset/pmi.png";
import googleLogo from "../asset/googleLogo.png";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center pt-20 relative">
        {/* PMI Logo */}
        <div className="pmi-logo absolute top-8">
          <img src={pmi} alt="pmi" className="w-40 h-auto" />
        </div>
        
        {/* Main App Logo */}
        <div className="app-logo mb-8 mt-12 pt-20">
          <img src={logo} alt="logo" className="w-96 max-w-full h-auto" />
        </div>
        
        {/* Sign Up Button */}
        <button className="signup-button mb-4">
          Sign up
        </button>
        
        {/* Google Button */}
        <button className="google-button mb-4">
          <span className="google-icon mr-2"><img src = {googleLogo} alt="Googe Logo" /></span>
          <span className="google-text">Continue with Google</span>
        </button>
        
        {/* Log in Text */}
        <p className="login-text cursor-pointer hover:underline">
          Log in
        </p>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;