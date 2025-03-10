import React from 'react';
import styles from '../CSS/homePage.module.css';
import AuthSectionPage from './AuthSectionPage';
import SignupPage from './SignupPage';
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import LoginPage from './LoginPage';

function HomePage() {
  return (
    <div className={styles.pageContainer}>
        <div className={styles.homeContainer}>
            <div className={styles.heroContainer}>
                <h1 className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</h1>
                <div className={styles.heroText}>
                    <img src="./src/assets/android-chrome-192x192.png" alt=""/>
                    <h1 className={styles.convosText}>Convos</h1>
                </div>
                <div>
                    <p className={styles.poweredBy}>Powered by</p>
                    <div className={styles.techStack}>
                        <FaReact className={styles.reactIcon}/>
                        <DiMongodb className={styles.mongodbIcon}/>
                        <SiExpress className={styles.expressIcon}/>
                    </div>
                </div>
                <div className={styles.helpAndSupport}><p>Help and Support</p></div>
            </div>
            <SignupPage />
        </div>
    </div>
  )
}

export default HomePage;