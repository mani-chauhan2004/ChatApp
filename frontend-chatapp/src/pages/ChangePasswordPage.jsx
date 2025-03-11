import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import styles from '../CSS/changePasswordPage.module.css'
function changePasswordPage() {
    const [formData, setFormData] = React.useState({
        password: '',
        confirmedPassword: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            password: '',
            confirmedPassword: ''
        });
    }
    return (
      <div className={styles.changePasswordContainer}>
        <form onSubmit={ handleSubmit } className={styles.changePasswordForm}>
          <SlOptionsVertical className={styles.optionsIcon}/>
          <h1 className={styles.convosText}>Convos</h1>
          <h1 className={styles.changePasswordHeading}>Enter new Password</h1>
          <p className={styles.changePasswordDescription}>
                Enter the new password to change your password
          </p>
          <input 
              type="password" 
              className={styles.changePasswordInput} 
              onChange={ handleChange }
              name="password" 
              id="password" 
              value={formData.password}
              placeholder='Password'
          />
          <input 
              type="password" 
              className={styles.changePasswordInput} 
              onChange={ handleChange }
              name="confirmedPassword" 
              id="confirmedPassword" 
              value={formData.confirmedPassword}
              placeholder='Confirm Password'
          />
          <button className={styles.changePasswordButton}>Change Password</button>
          <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
        </form>
      </div>
    )
}

export default changePasswordPage