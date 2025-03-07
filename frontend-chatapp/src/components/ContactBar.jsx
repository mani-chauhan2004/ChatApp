import React from 'react'
import styles from'../CSS/contactBar.module.css';
import { CgProfile } from "react-icons/cg";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
function ContactBar({image, name, lastMessage, unreadMessage, status, time}) {
  return (
    <div className={styles.contactBar}>
        {
            image? <img src={image} alt={name} className={styles.contactBarImage} />:<CgProfile className={styles.contactBarImage}/>
        }
        <div className={styles.infoBox}>
            <div>
                <h3 className={styles.contactName}>{name}</h3>
                <p className={styles.lastMessage}>{lastMessage}</p>
            </div>
            <div className={styles.messageStatusContainer}>
                <p className={styles.lastMessageTime}>{time}</p>
                {
                    unreadMessage? 
                    <span className={styles.unreadMessage}>{unreadMessage}</span>:
                    status === 'sent' ? 
                    <LiaCheckSolid className={styles.messageSent}/>:
                    <LiaCheckDoubleSolid className={`${status}`}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ContactBar