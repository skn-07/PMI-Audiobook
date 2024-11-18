import React from "react";
import "./Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="login-page">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="login-container">
        <h2>Login</h2>
        <p className="instructions">Please fill in your username and password.</p>
        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <a href="/forgot-password" className="link">Forgot password?</a>
          <div className="link-container">
            <a href="/" className="link">Back</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;