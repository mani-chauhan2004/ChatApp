import React from 'react'
import { Link } from 'react-router-dom'
import { TbAlarmSmoke } from "react-icons/tb";
import styles from '../CSS/notFoundPage.module.css'
function NotFoundPage() {

    return (
      <div className={styles.notFoundContainer}>
        <h1 className={styles.convosText}>Convos</h1>
        <h1 className={styles.notFoundHeading}>404</h1>
        <TbAlarmSmoke className={styles.notFoundIcon}/>
        <h2 className={styles.notFoundSubHeading}>Page Not Found</h2>
        <p className={styles.notFoundDescription}>
            The page that you're looking for is still offline.
        </p>
        <Link to="/" className={styles.notFoundButton}>Back To Home</Link>
        <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
      </div>
    )
}

export default NotFoundPage;