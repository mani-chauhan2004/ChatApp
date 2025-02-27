import React from 'react'
import { VscSend } from "react-icons/vsc";
import '../CSS/messageForm.css'
function MessageForm() {
  return (
      <form className='form-container'>
        <input type='text' placeholder='Type your message...' className='message-input' />
        <button className='post-message' type='submit'><VscSend className='post-message-icon'/></button>
      </form>
  )
}

export default MessageForm;