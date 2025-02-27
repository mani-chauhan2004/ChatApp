import React from 'react'
import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import '../CSS/heroBAr.css'
function HeroBar({name, displayPicture, status}) {
  return (
    <div className='hero-bar'>
        <div className='hero-status'>
            {
                displayPicture? <img src={displayPicture} alt={name} className='display-picture' />:<CgProfile className='display-picture icons'/>
            }
            <div className='status-info'>
                <h2 className='hero-name'>Alice</h2>
                <p className='bar-hero-status'>Online</p>
            </div>
        </div>
        <div className='connectivity'>
            <div className='call-icon'>
                <HiOutlinePhone className='call-icon-img icons'/>
            </div>
            <div className='video-icon'>
                <IoVideocamOutline className='video-icon-img icons'/>
            </div>
            <div className='options-icon'>
                <CiMenuKebab className='options-icon-img icons'/>
            </div>
        </div>
    </div>
  )
}

export default HeroBar;