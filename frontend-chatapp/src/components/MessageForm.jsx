import React from 'react'
import { VscSend } from "react-icons/vsc";
import styles from '../CSS/messageForm.module.css'
function MessageForm() {
  return (
      <form className={styles.formContainer}>
        <input type='text' name='typeMessage' placeholder='Type your message...' className={styles.messageInput} />
        <button className={styles.postMessage} type='submit'><VscSend className={styles.postMessageIcon}/></button>
      </form>
  );
}

export default MessageForm;