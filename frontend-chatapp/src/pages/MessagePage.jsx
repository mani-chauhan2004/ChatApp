import React from 'react';
import ContactList from '../components/ContactList';
import '../CSS/messagePage.css';
import MessageWindow from '../components/MessageWindow';
import UtilityBar from '../components/UtilityBar';
function MessagePage() {
  return (
    <div className='message-page'>
        <div className='navbar-holder'>
            <UtilityBar/>
        </div>
        <div className='group-contact-holder'>
            <ContactList/>
        </div>
        <div className='message-window-holder'>
            <MessageWindow/>
        </div>
    </div>
  )
}

export default MessagePage