import React from 'react'
import { Link } from 'react-router-dom'
import { TbAlarmSmoke } from "react-icons/tb";
import styles from '../CSS/unauthorisedPage.module.css'
function UnauthorisedPage() {

    return (
      <div className={styles.unauthorisedContainer}>
        <h1 className={styles.convosText}>Convos</h1>
        <h1 className={styles.unauthorisedHeading}>402</h1>
        <TbAlarmSmoke className={styles.unauthorisedIcon}/>
        <h2 className={styles.unauthorisedSubHeading}>User Unauthorised</h2>
        <p className={styles.unauthorisedDescription}>
            Wait! Strangers need to pass through the check to access endpoint
        </p>
        <Link to="/login" className={styles.unauthorisedButton}>Login</Link>
        <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
      </div>
    )
}

export default UnauthorisedPage;