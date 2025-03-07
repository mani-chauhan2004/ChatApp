import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { BiGroup } from "react-icons/bi";
import { BiSolidGroup } from "react-icons/bi";
import styles from '../CSS/utilityBar.module.css';
function UtilityBar() {
  return (
    <div className={styles.utilityBar}>
        <div className={'profile-icon-container'}>
            <CgProfile className={`${styles.utilityIcons}`}/>
        </div>

        <div className={styles.utilityIconsContainer}>
            <IoHomeOutline className={`home-icon ${styles.utilityIcons}`}/>
            <PiChatCircleDots className={`chat-icon ${styles.utilityIcons}`}/>
            <BiGroup className={`group-chat-icon ${styles.utilityIcons}`}/>
            <SlSettings className={`settings-icon ${styles.utilityIcons}`}/>
        </div>
        <div className={'log-out-container'}>
            <AiOutlineLogout className={styles.logoutIcon}/>
        </div>
    </div>
  )
}

export default UtilityBar