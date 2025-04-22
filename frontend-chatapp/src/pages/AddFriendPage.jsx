import React, { useState } from 'react'
import axios from 'axios'
function AddFriendPage() {
    const [userId, setUserId] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/user/api/add-friend", { id: userId }, {
                withCredentials: true,
            });
            console.log(response.data);
            setUserId('');
        }catch(error) {
            console.error(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='userID' 
                value={userId} 
                onChange={(e) => {
                    setUserId(e.target.value);
                }}
            />
            <button type='submit'>Add friend</button>
        </form>
    )
}

export default AddFriendPage;