import React from 'react'
import { VscSend } from "react-icons/vsc";
import styles from '../CSS/messageForm.module.css';
import socket from '../utils/socket';
import { useState } from 'react';
function MessageForm() {

  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('messageSent', { message: message});
    setMessage('');
  }


  return (
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='typeMessage' 
          placeholder='Type your message...' 
          className={styles.messageInput} 
          value={message} 
          onChange={(e) => {
            setMessage(e.target.value)}
          }
        />
        <button className={styles.postMessage} type='submit'><VscSend className={styles.postMessageIcon}/></button>
      </form>
  );
}

export default MessageForm;