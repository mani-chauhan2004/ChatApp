import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import styles from '../CSS/forgotPasswordPage.module.css'
function ForgotPasswordPage() {
    const [formData, setFormData] = React.useState({
      email: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            email: ''
        });
    }
    return (
      <div className={styles.forgotPasswordContainer}>
        <form onSubmit={ handleSubmit } className={styles.forgotPasswordForm}>
          <SlOptionsVertical className={styles.optionsIcon}/>
          <h1 className={styles.convosText}>Convos</h1>
          <h1 className={styles.forgotPasswordHeading}>Forgot Password</h1>
          <p className={styles.forgotPasswordDescription}>
                Enter your email address and we'll send you a reset code
          </p>
          <input 
              type="email" 
              className={styles.forgotPasswordInput} 
              onChange={ handleChange }
              name="email" 
              id="email" 
              value={formData.email}
              placeholder='Email'
          />
          <button className={styles.forgotPasswordButton}>Send Reset Code</button>
          <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
        </form>
      </div>
    )
}

export default ForgotPasswordPage