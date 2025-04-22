import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { BiGroup } from "react-icons/bi";
import { BiSolidGroup } from "react-icons/bi";
import styles from '../CSS/utilityBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { nullifyDp } from '../redux/features/userSlice';
import { isAuthenticatedFalse } from '../redux/features/authSlice';
function UtilityBar() { 
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileImage = useSelector(state => state.user.dp);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [active, setActive] = useState(location.pathname);
  const handleLogout = async() => {
    try {
      const response = await axios.post("http://localhost:8080/auth/api/logout", {}, { withCredentials: true });
      console.log(response.data);
      dispatch(nullifyDp());
      localStorage.clear();
      sessionStorage.clear();
      dispatch(isAuthenticatedFalse());
      navigate('/login', { replace: true });
    }catch(error) {
      console.log(error);
    }
    return;
  }
  return (
    <div className={styles.utilityBar}>
        <div className={'profile-icon-container'}>
            {
              profileImage? <img className={styles.profileImage} src={profileImage} alt="dp" /> : <CgProfile className={`${styles.utilityIcons}`}/>
            }
        </div>

        <div className={styles.utilityIconsContainer}>
            {/* <IoHomeOutline className={`home-icon ${styles.utilityIcons}`}/> */}
            <Link className={active=='/messages'? styles.activeLink: styles.link} to={'/messages'} onClick={() => setActive('/messages')}><PiChatCircleDots className={active == '/messages'?`chat-icon ${styles.utilityIcons} ${styles.utilityIconsClicked}`: `chat-icon ${styles.utilityIcons}` }/></Link>
            <Link className={active=='/messages/friends'? styles.activeLink: styles.link} to={'friends'} onClick={() => setActive('/messages/friends')}><BiGroup className={active == '/messages/friends'?`group-chat-icon ${styles.utilityIcons} ${styles.utilityIconsClicked}`: `group-chat-icon ${styles.utilityIcons}`}/></Link>
            <SlSettings  className={`settings-icon ${styles.utilityIcons}`}/>
        </div>
        <div className={'log-out-container'}>
            <AiOutlineLogout
              onClick={handleLogout} 
              className={styles.logoutIcon}
            />
        </div>
    </div>
  )
}

export default UtilityBar;