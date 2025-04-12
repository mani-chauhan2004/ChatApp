import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import styles from '../CSS/AddProfilePhotoPage.module.css'
function AddProfilePhotoPage() {

    const [profilePhoto, setProfilePhoto] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileImage', profilePhoto);
            const response = await axios.post('http://localhost:8080/upload/api/profile-photo', formData, {
                withCredentials: true,
            });
            console.log(response);
        }catch(error) {
            console.error(error);
            alert('Failed to upload profile photo');
        }
    }

    return (
        <div className={styles.profilePhotoPageContainer}>
            <form className={styles.profileImageForm} onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Add Profile Photo</h1>
                <label 
                    htmlFor="profileImage"
                >
                    <CgProfile className={styles.imagePlaceHolder}/>
                </label>
                <input 
                    type="file" 
                    hidden id="profileImage" 
                    name="profileImage" 
                    accept="image/*" 
                    value={profilePhoto}
                    onChange={(e=> setProfilePhoto(e.target.value))}
                />
                <button type='submit' className={styles.updatePhotoButton}>Update Profile Photo</button>
            </form>
        </div>
    )
}

export default AddProfilePhotoPage;