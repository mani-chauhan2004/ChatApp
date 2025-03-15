import React, { useState } from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';
import styles from '../CSS/loginPage.module.css';
import axios from 'axios';
function LoginPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8080/auth/api/login", formData, { withCredentials: true });
      console.log(response);
      setFormData({
        email: '',
        password: '',
      });
      navigate('/messages');
    }catch(error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={ handleSubmit } className={styles.loginForm}>
        <SlOptionsVertical className={styles.optionsIcon}/>
        <h1 className={styles.convosText}>Convos</h1>
        <h1 className={styles.loginHeading}>Login</h1>
        <input 
            type="email" 
            className={styles.loginInput} 
            onChange={ handleChange }
            name="email" 
            id="email" 
            value={formData.email}
            placeholder='Email'
        />
        <input 
            type="password" 
            className={styles.loginInput} 
            onChange={ handleChange }
            name="password" 
            id="password" 
            value={ formData.password }
            placeholder='Password'
        />
        <div className={styles.forgotPassword}>
            <p className={styles.forgotPasswordLink}><Link to='/forgot-password'>Forgot Password?</Link></p>
        </div>
        <div className={styles.signupMessage}>
            <p className={styles.signupQuestion}>Don't have an account? <Link to="/signup"><span className={styles.signupLink}>Signup</span></Link></p>
        </div>
        <button type='submit' className={styles.loginButton}>Login</button>
        <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
      </form>
    </div>
  )
}

export default LoginPage;