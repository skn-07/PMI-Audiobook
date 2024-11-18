import React from "react";
import { Link } from 'react-router-dom';
import styles from './Signup2.module.css';

const Signup2 = () => {
  return (
    <div className={styles.signupPage}>
      {/* Top blue bar */}
      <div className={`${styles.blueBox} ${styles.Top}`}></div>
      
      <div className={styles.container}>
        <div className={styles.signupForm}>
          {/* Form header */}
          <h2>Sign Up</h2>
          <p>Please fill your information below</p>
          
          <form>
            {/* Username input */}
            <div className={`${styles.inputGroup} ${styles.usernameGroup}`}>
              <label htmlFor="username">Username</label>
              <input type="text" id="name" placeholder="abc" />
            </div>

            {/* Password input */}
            <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
              <label htmlFor="password">Password</label>
              <input type="text" id="mobile"  />
            </div>

            {/* Confirm Password input */}
            <div className={`${styles.inputGroup} ${styles.cpasswordGroup}`}>
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="email" id="email"  />
            </div>

            {/* Action buttons and links */}
            <div className={styles.actions}>
              <a href="/login" className={styles.loginLink}>Already have an account? Login</a>
              <Link to="#" className={styles.nextButton}>
                Next  &gt;
              </Link>
              
              
              {/* Line below the Next button */}
              {/* <div className={styles.line}></div> */}
            </div>

            {/* Flexible back link */}
            <Link to="/Signup1" className={styles.backLink2}>
                BACK
            </Link>
          </form>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className={`${styles.blueBox} ${styles.Bottom}`}></div>
    </div>
  );
};

export default Signup2;
