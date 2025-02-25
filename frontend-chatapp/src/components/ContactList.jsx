import React, { useState } from 'react'
import ContactBar from './ContactBar';
import '../CSS/contactList.css'
function ContactList() {

  const [contactStatus, setContactStatus] = useState([
    { "name": "Alice", "lastMessage": "Hey, how are you?", "unreadMessages": 3, "time": "Yesterday, 9:47pm" },
    { "name": "Bob", "lastMessage": "Let's meet tomorrow.", "status": "seen", "time": "Yesterday, 9:47pm" },
    { "name": "Charlie", "lastMessage": "Can you send the report?", "unreadMessages": 1, "time": "Yesterday, 9:47pm" },
    { "name": "David", "lastMessage": "Good night!", "status": "delivered", "time": "Yesterday, 9:47pm" },
    { "name": "Emma", "lastMessage": "Call me when you're free.", "unreadMessages": 5, "time": "Yesterday, 9:47pm" },
    { "name": "Frank", "lastMessage": "Happy birthday!", "status": "sent", "time": "Yesterday, 9:47pm" },
    { "name": "Grace", "lastMessage": "Where are you?", "unreadMessages": 2, "time": "Yesterday, 9:47pm" },
    { "name": "Hannah", "lastMessage": "Thanks for the help!", "status": "seen", "time": "Yesterday, 9:47pm" },
    { "name": "Isaac", "lastMessage": "Join the meeting at 5 PM.", "unreadMessages": 4, "time": "Yesterday, 9:47pm" },
    { "name": "Jack", "lastMessage": "Let's play chess.", "status": "delivered", "time": "Yesterday, 9:47pm" },
    { "name": "Kate", "lastMessage": "Did you complete the project?", "unreadMessages": 1, "time": "Yesterday, 9:47pm" },
    { "name": "Leo", "lastMessage": "I'll be late today.", "status": "sent", "time": "Yesterday, 9:47pm" },
    { "name": "Mia", "lastMessage": "See you soon!", "unreadMessages": 3, "time": "Yesterday, 9:47pm" },
    { "name": "Nathan", "lastMessage": "Send me the notes.", "status": "seen", "time": "Yesterday, 9:47pm" },
    { "name": "Olivia", "lastMessage": "What time is the event?", "unreadMessages": 2, "time": "Yesterday, 9:47pm" },
    { "name": "Paul", "lastMessage": "Let's discuss this later.", "status": "delivered", "time": "Yesterday, 9:47pm" },
    { "name": "Quinn", "lastMessage": "Are you coming?", "unreadMessages": 1, "time": "Yesterday, 9:47pm" },
    { "name": "Ryan", "lastMessage": "I'll update you soon.", "status": "sent", "time": "Yesterday, 9:47pm" },
    { "name": "Sophia", "lastMessage": "Great job on the presentation!", "unreadMessages": 4, "time": "Yesterday, 9:47pm" },
    { "name": "Tom", "lastMessage": "How's your day going?", "status": "seen", "time": "Yesterday, 9:47pm" }
  ]
  );
  return (
    <div className='contact-list-container'>
        <form className='query-form' action="">
            <input className='search-input' type='text' placeholder='Search...' />
        </form>
        <div className='contact-list'>
            {
              contactStatus.map((contact, index) => {
                return <ContactBar 
                key={index} 
                name={contact.name} 
                lastMessage={contact.lastMessage}
                unreadMessage={contact.unreadMessages?contact.unreadMessages: null}
                status={contact.status? contact.status: null}
                time={contact.time} 
              />
              })
            }
        </div>
    </div>
  )
}

export default ContactList