import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdPermIdentity } from "react-icons/md";
import styles from '../CSS/AddProfilePhotoPage.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
function AddProfilePhotoPage() {
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileImage', profilePhoto);
            const response = await axios.post('http://localhost:8080/upload/api/profile-image', formData, {
                withCredentials: true,
            });
            navigate('/login');
        }catch(error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.profilePhotoPageContainer}>
            <form className={styles.profileImageForm} onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Add Profile Photo</h1>
                <label 
                    htmlFor="profileImage"
                    className={styles.imageLabel}
                >   
                    {
                        profilePhoto === null? <MdPermIdentity className={styles.imagePlaceHolder}/>: 
                        <img src={URL.createObjectURL(profilePhoto)} className={styles.uploadedImage} alt="" />
                    }
                </label>
                <input 
                    type="file" 
                    hidden 
                    id="profileImage" 
                    name="profileImage" 
                    accept="image/*" 
                    onChange={(e=> setProfilePhoto(e.target.files[0]))}
                />
                <button type='submit' className={styles.updatePhotoButton}>Update Profile Photo</button>
                <button onClick={() => navigate('/login')} className={styles.skipButton}>Skip</button>
            </form>
        </div>
    )
}

export default AddProfilePhotoPage;