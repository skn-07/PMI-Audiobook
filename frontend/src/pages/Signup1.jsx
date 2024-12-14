import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Signup1.module.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.signupPage}>
      {/* Top blue bar */}
      <div className={`${styles.blueBox} ${styles.top}`}></div>

      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Create Account</h2>
            <p>Join our community of audiobook lovers</p>
          </div>
          
          <form className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="name">Full Name</label>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="tel" 
                id="mobile" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="mobile">Mobile Number</label>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputLine}></div>
            </div>

            <div className={styles.actions}>
              <Link to="/signup2" className={styles.nextButton}>
                Continue
                <span className={styles.buttonIcon}>→</span>
              </Link>
            </div>

            <div className={styles.bottomLinks}>
              <Link to="/login" className={styles.loginLink}>
                Already have an account? <span>Login</span>
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

export default SignUpForm;
