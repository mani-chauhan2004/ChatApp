import React, { useState, useEffect } from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { useSearchParams, useNavigate } from 'react-router';
import axios from 'axios';
import styles from '../CSS/changePasswordPage.module.css';
function ChangePasswordPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirmedPassword: '',
    });

    useEffect(() => {
        const token = searchParams.get('token');
        if(!searchParams.get('token')){
            navigate('/login');
        }
        localStorage.setItem('token', token);
        navigate('/change-password', { replace: true });
    }, [navigate, ])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if(formData.password!== formData.confirmedPassword){
            alert('Passwords do not match');
            return;
        }
        const response = await axios.post(`http://localhost:8080/auth/api/change-password`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        setFormData({
            password: '',
            confirmedPassword: ''
        });
        localStorage.removeItem('token');
        navigate('/login');
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
          <button className={styles.changePasswordButton} type='submit'>Change Password</button>
          <p className={styles.companyLogo}><span className={styles.logoSpan}>C.</span>Bits</p>
        </form>
      </div>
    )
}

export default ChangePasswordPage;