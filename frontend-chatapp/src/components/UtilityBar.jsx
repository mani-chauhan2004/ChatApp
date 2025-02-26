import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { PiChatCircleDots } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { BiGroup } from "react-icons/bi";
import { BiSolidGroup } from "react-icons/bi";
import '../CSS/utilityBar.css';
function UtilityBar() {
  return (
    <div className='utility-bar'>
        <div className='profile-icon-container'>
            <CgProfile className='profile-icon utility-icons'/>
        </div>

        <div className='utility-icons-container'>
            <IoHomeOutline className='home-icon utility-icons'/>
            <PiChatCircleDots className='chat-icon utility-icons'/>
            <BiGroup className='group-chat-icon utility-icons'/>
            <SlSettings className='settings-icon utility-icons'/>
        </div>
        <div className='log-out-container'>
            <AiOutlineLogout className='log-out-icon'/>
        </div>
    </div>
  )
}

export default UtilityBar