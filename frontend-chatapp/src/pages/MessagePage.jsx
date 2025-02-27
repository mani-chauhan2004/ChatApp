import React from 'react';
import ContactList from '../components/ContactList';
import MessageWindow from '../components/MessageWindow';
import UtilityBar from '../components/UtilityBar';
import HeroBar from '../components/HeroBar';
import MessageForm from '../components/MessageForm';
import '../CSS/messagePage.css';
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
            <HeroBar/>
            <MessageWindow/>
            <MessageForm/>
        </div>
    </div>
  )
}

export default MessagePage;