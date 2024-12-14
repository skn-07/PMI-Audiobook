import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.loginPage}>
      {/* Top blue bar */}
      <div className={`${styles.blueBox} ${styles.top}`}></div>

      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Welcome Back</h2>
            <p>Login to your account</p>
          </div>
          
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                id="username" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="username">Username</label>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="password" 
                id="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="password">Password</label>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.loginButton}>
                Login
                <span className={styles.buttonIcon}>→</span>
              </button>
            </div>

            <div className={styles.bottomLinks}>
              <Link to="/signup1" className={styles.signupLink}>
                Don't have an account? <span>Sign Up</span>
              </Link>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
              <Link to="/" className={styles.backLink}>
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className={`${styles.blueBox} ${styles.bottom}`}></div>
    </div>
  );
};

export default Login;