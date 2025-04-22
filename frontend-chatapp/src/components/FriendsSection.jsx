import React from 'react'
import HeroBar from './HeroBar';
import MessageWindow from './MessageWindow';
import styles from '../CSS/friendsSection.module.css'
import FriendList from './FriendList';
import MessageForm from './MessageForm';
function FriendsSection() {
  return (
    <div className={styles.friendsSectionHolder}>
        <div className={styles.friendListHolder}>
            <FriendList/>
        </div>
        <div className={styles.messageWindowHolder}>
            <HeroBar/>
            <MessageWindow/>
            <MessageForm/>
        </div>
    </div>
  )
}

export default FriendsSection;