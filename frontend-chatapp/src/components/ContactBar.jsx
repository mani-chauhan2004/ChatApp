import React from 'react'
import '../CSS/ContactBar.css'
import { CgProfile } from "react-icons/cg";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
function ContactBar({image, name, lastMessage, unreadMessage, status, time}) {
  return (
    <div className='contact-bar'>
        {
            image? <img src={image} alt={name} className='contact-bar-image' />:<CgProfile className='contact-bar-image'/>
        }
        <div className='info-box'>
            <div>
                <h3 className='contact-name'>{name}</h3>
                <p className='last-message'>{lastMessage}</p>
            </div>
            <div className='message-status-container'>
                <p className='last-message-time'>{time}</p>
                {
                    unreadMessage? 
                    <span className='unread-message'>{unreadMessage}</span>:
                    status === 'sent' ? 
                    <LiaCheckSolid className='message-sent'/>:
                    <LiaCheckDoubleSolid className={`${status}`}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ContactBar