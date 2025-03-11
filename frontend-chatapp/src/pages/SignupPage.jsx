import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../CSS/signupPage.module.css'
function SignupPage() {

  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if(formData.password!== formData.confirmPassword){
        alert('Passwords do not match');
        return;
      }
      const response = await axios.post('http://localhost:8080/auth/api/signup', formData);
      console.log(response);
      setFormData({
        username: '', 
        email: '',
        password: '',
        confirmPassword: ''
      })
    }catch(error){
      console.error(error);
    }
  }
  return (
    <div className={styles.signupContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm} method='POST'>
        <SlOptionsVertical className={styles.optionsIcon} />  
        <h1 className={styles.convosText}>Convos</h1>
        <h1 className={styles.signupHeading}>Sign Up</h1>
        <input 
            type="text" 
            className={styles.signupInput} 
            name="username" 
            onChange={handleChange}
            value = {formData.username} 
            id="username" 
            placeholder='Username'
        />
        <input 
            type="email" 
            className={styles.signupInput} 
            name="email" 
            onChange={handleChange}
            value = {formData.email}
            id="email" 
            placeholder='Email'
        />
        <input 
            type="password" 
            className={styles.signupInput} 
            name="password" 
            onChange={handleChange}
            value = {formData.password}
            id="password" 
            placeholder='Password'
        />
        <input 
            type="password" 
            className={styles.signupInput} 
            name="confirmPassword" 
            onChange={handleChange}
            value = {formData.confirmPassword}
            id="confirm-password" 
            placeholder='Confirm Password'
        />
        <div className={styles.loginMessage}>
            <p className={styles.loginQuestion}>Already have an account? <Link to='/login'> <span className={styles.loginLink}>Login</span></Link></p>
        </div>
        <button type='submit' className={styles.signupButton}>Sign Up</button>
        <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
      </form>

    </div>
  )
}

export default SignupPage;