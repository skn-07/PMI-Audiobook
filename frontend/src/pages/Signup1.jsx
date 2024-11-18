import React from "react";
import { Link } from 'react-router-dom';
import styles from './Signup1.module.css'; 

const SignUpForm = () => {
  return (
    <div className={styles.signupPage}>
      {/* Top blue bar */}
      <div className={`${styles.blueBox} ${styles.top}`}></div>
      
      <div className={styles.container}>
        {/* <a href="#" className={styles.backLink1}>BACK</a> */}
        <div className={styles.signupForm}>
          {/* Form header */}
          <h2>Sign Up</h2>
          <p>Please fill your information below</p>
          
          <form>
            {/* Name input */}
            <div className={`${styles.inputGroup} ${styles.nameGroup}`}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="abc" />
            </div>

            {/* Mobile number input */}
            <div className={`${styles.inputGroup} ${styles.mobileGroup}`}>
              <label htmlFor="mobile">Mobile number</label>
              <input type="text" id="mobile" placeholder="(91) 8767564357" />
            </div>

            {/* Email input */}
            <div className={`${styles.inputGroup} ${styles.emailGroup}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="abc@gmail.com" />
            </div>

            {/* Action buttons and links */}
            <div className={styles.actions}>
              <a href="/login" className={styles.loginLink}>Already have an account? Login</a>
              <Link to="/signup2" className={styles.nextButton}>
                Next  &gt;
              </Link>
            </div>

            {/* Flexible back link */}
            <Link to="/" className={styles.backLink2}>
                BACK
              </Link>
          </form>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className={`${styles.blueBox} ${styles.bottom}`}></div>
    </div>
  );
};

export default SignUpForm;
