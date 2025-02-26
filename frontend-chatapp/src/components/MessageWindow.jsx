import {React, useState} from 'react'
import '../CSS/messageWindow.css'
import MessageContainer from './MessageContainer';
function MessageWindow() {
  const [messageData, setMessageData] = useState([
    {
      "message": "Hey, how are you?",
      "time": "10:05 AM",
      "status": "sent",
      "sentBy": "Alice"
    },
    {
      "message": "I'm good! How about you?",
      "time": "10:06 AM",
      "status": "delivered",
      "sentBy": "you"
    },
    {
      "message": "Just working on some projects.",
      "time": "10:07 AM",
      "status": "seen",
      "sentBy": "Alice"
    },
    {
      "message": "Sounds great! Need any help?",
      "time": "10:08 AM",
      "status": "sent",
      "sentBy": "you"
    },
    {
      "message": "Maybe later. Thanks!",
      "time": "10:10 AM",
      "status": "seen",
      "sentBy": "Alice"
    },
    {
      "message": "Hey, did you complete the assignment?",
      "time": "11:15 AM",
      "status": "delivered",
      "sentBy": "Bob"
    },
    {
      "message": "Not yet, still working on it.",
      "time": "11:16 AM",
      "status": "sent",
      "sentBy": "you"
    },
    {
      "message": "Let me know if you need any notes.",
      "time": "11:17 AM",
      "status": "seen",
      "sentBy": "Bob"
    },
    {
      "message": "Sure, will do!",
      "time": "11:18 AM",
      "status": "delivered",
      "sentBy": "you"
    },
    {
      "message": "Hey, want to play chess later?",
      "time": "12:30 PM",
      "status": "sent",
      "sentBy": "Charlie"
    },
    {
      "message": "Yeah, let's play in the evening.",
      "time": "12:31 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "Great! I'll text you at 6.",
      "time": "12:32 PM",
      "status": "delivered",
      "sentBy": "Charlie"
    },
    {
      "message": "Cool, see you then!",
      "time": "12:33 PM",
      "status": "sent",
      "sentBy": "you"
    },
    {
      "message": "Hey, are you coming to the party?",
      "time": "3:00 PM",
      "status": "delivered",
      "sentBy": "David"
    },
    {
      "message": "Yes, I'll be there!",
      "time": "3:02 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "Awesome! See you soon.",
      "time": "3:03 PM",
      "status": "sent",
      "sentBy": "David"
    },
    {
      "message": "Hey, what's up?",
      "time": "4:20 PM",
      "status": "sent",
      "sentBy": "Emma"
    },
    {
      "message": "Not much, just chilling.",
      "time": "4:21 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "Same here!",
      "time": "4:22 PM",
      "status": "delivered",
      "sentBy": "Emma"
    },
    {
      "message": "Did you see the new movie?",
      "time": "6:15 PM",
      "status": "sent",
      "sentBy": "Frank"
    },
    {
      "message": "Not yet, planning to watch it this weekend.",
      "time": "6:16 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "It's really good! you'll love it.",
      "time": "6:17 PM",
      "status": "delivered",
      "sentBy": "Frank"
    },
    {
      "message": "Looking forward to it!",
      "time": "6:18 PM",
      "status": "sent",
      "sentBy": "you"
    },
    {
      "message": "Hey, can you send me the notes?",
      "time": "8:00 PM",
      "status": "delivered",
      "sentBy": "Grace"
    },
    {
      "message": "Sure, I'll send them in a bit.",
      "time": "8:01 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "Thanks a lot!",
      "time": "8:02 PM",
      "status": "sent",
      "sentBy": "Grace"
    },
    {
      "message": "Hey, did you eat?",
      "time": "9:15 PM",
      "status": "sent",
      "sentBy": "Hannah"
    },
    {
      "message": "Yeah, just had dinner.",
      "time": "9:16 PM",
      "status": "seen",
      "sentBy": "you"
    },
    {
      "message": "Nice, what did you eat?",
      "time": "9:17 PM",
      "status": "delivered",
      "sentBy": "Hannah"
    },
    {
      "message": "Pasta. It was really good!",
      "time": "9:18 PM",
      "status": "sent",
      "sentBy": "you"
    },
    {
      "message": "I love pasta too!",
      "time": "9:19 PM",
      "status": "seen",
      "sentBy": "Hannah"
    }
  ]
  );
  return (
    <div className='message-window-container'>
        {
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