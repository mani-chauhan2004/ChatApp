import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { SlOptionsVertical } from "react-icons/sl";
import styles from '../CSS/authSectionPage.module.css'
function AuthSectionPage() {
  return (
        <div className={styles.authSectionContainer}>
            <div className={styles.authSection}>
                <SlOptionsVertical className={styles.optionsIcon}/>
                <h1 className={styles.getStartedHeading}>Get Started</h1>
                <p className={styles.getStartedDescription}>Flight to million Chats and Convos ready to go. Welcome onboard...</p>
                <div className={styles.logoContainer}>
                    <img className={styles.authSectionLogoImg} src="./src/assets/apple-touch-icon.png" alt=""/>
                    <h1 className={styles.convosText}>Convos</h1>
                </div>
                <div className={styles.authButtons}>
                    <div className={styles.signupSection}>
                        <h2 className={styles.authMessage}>New User?</h2>
                        <Link to="signup"><button className={styles.signupButton}>Sign Up</button></Link>
                    </div>
                    <div className={styles.loginSection}>
                        <h2 className={styles.authMessage}>Already a User?</h2>
                        <Link to="login"><button className={styles.loginButton}>Log In</button></Link>
                    </div>
                </div>
                    <h4 className={styles.cBits}><span className={styles.logo}>C.</span>Bits</h4>
            </div>
        </div>
  )
}

export default AuthSectionPage;