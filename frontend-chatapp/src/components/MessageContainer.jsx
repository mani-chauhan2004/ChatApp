import React from 'react'
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
import '../CSS/messageContainer.css'
function MessageContainer({message, time, sender, status}) {
    const sentBy = sender === "you"? "you" : "else";
    return (
        <div className={`message-container ${sentBy}`}>
            <div className='message-txt'>
                {message}
            </div>
            <div className='additional-info'>
                <div className='time'>{time}</div>
                <div className='status'>{
                    sentBy === "you"? status === 'sent'? <LiaCheckSolid className={`${status}`}/>:
                    status === 'seen'? <LiaCheckDoubleSolid className={`${status}`}/>:
                    <LiaCheckDoubleSolid className={`${status}`}/>: null
                }</div>
            </div>
        </div>
    )
}

export default MessageContainer;