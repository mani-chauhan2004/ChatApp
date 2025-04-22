import {React, useState} from 'react'
import styles from '../CSS/messageWindow.module.css'
import MessageContainer from './MessageContainer';
function MessageWindow() {
  const [messageData, setMessageData] = useState(null);
  return (
    <div className={styles.messageWindowContainer}>
        {
          messageData === null? 
          <div className={styles.messagePlaceHolder}>
            <h2 className={styles.noMessageHeading}>No messages yet</h2>
            <p className={styles.noMessageText}>Can't construct memories without conversation! <br /> Tap to start a conversation</p>
            <button className={styles.startChatButton}>Start Chat</button>
          </div>:
          messageData.map((message, index) => {
            return <MessageContainer 
              key={index}
              message={message.message}
              time={message.time}
              status={message.status}
              sender={message.sentBy}
            />
          })
        }
    </div>
  )
}

export default MessageWindow;