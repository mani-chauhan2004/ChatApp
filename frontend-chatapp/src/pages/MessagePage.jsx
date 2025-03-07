import React from 'react';
import ContactList from '../components/ContactList';
import MessageWindow from '../components/MessageWindow';
import UtilityBar from '../components/UtilityBar';
import HeroBar from '../components/HeroBar';
import MessageForm from '../components/MessageForm';
import styles from '../CSS/messagePage.module.css';
function MessagePage() {
  return (
    <div className={styles.messagePage}>
        <div className={styles.navbarHolder}>
            <UtilityBar/>
        </div>
        <div className={styles.groupContactHolder}>
            <ContactList/>
        </div>
        <div className={styles.messageWindowHolder}>
            <HeroBar/>
            <MessageWindow/>
            <MessageForm/>
        </div>
    </div>
  )
}

export default MessagePage;