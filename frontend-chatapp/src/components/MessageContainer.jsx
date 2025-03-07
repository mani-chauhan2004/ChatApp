import React from 'react'
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
import styles from '../CSS/messageContainer.module.css'
function MessageContainer({message, time, sender, status}) {
    const sentBy = sender === "you"? "you" : "else";
    // console.log(styles);
    return (
        <div className={`${styles.messageContainer} ${styles[sentBy]}`}>
            <div className={styles.messageTxt}>
                {message}
            </div>
            <div className={styles.additionalInfo}>
                <div className={time}>{time}</div>
                <div>{
                    sentBy === "you"? status === 'sent'? <LiaCheckSolid className={styles[status]}/>:
                    status === 'seen'? <LiaCheckDoubleSolid className={styles[status]}/>:
                    <LiaCheckDoubleSolid className={styles[status]}/>: null
                }</div>
            </div>
        </div>
    )
}

export default MessageContainer;