import React from 'react'
import HeroBar from './HeroBar';
import MessageWindow from './MessageWindow';
import MessageForm from './MessageForm';
import ContactList from './ContactList';
import styles from '../CSS/ChatSection.module.css'
function ChatSection() {
  return (
    <div className={styles.chatSectionHolder}>
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

export default ChatSection;