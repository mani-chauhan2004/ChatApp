import React from 'react'
import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import styles from '../CSS/heroBar.module.css';
function HeroBar({name, displayPicture, status}) {
  return (
    <div className={styles.heroBar}>
        <div className={styles.heroStatus}>
            <Link to='/'><IoMdArrowBack className={styles.backIcon}/></Link>
            {       
                displayPicture? <img src={displayPicture} alt={name} className={styles.displayPicture} />:<CgProfile className={styles.displayPictureIcons}/>
            }
            <div >
                <h2 className={styles.heroName}>Alice</h2>
                <p className={styles.barHeroStatus}>Online</p>
            </div>
        </div>
        <div className={styles.connectivity}>
            <div>
                <HiOutlinePhone className={styles.icons}/>
            </div>
            <div>
                <IoVideocamOutline className={styles.icons}/>
            </div>
            <div>
                <CiMenuKebab className={styles.icons}/>
            </div>
        </div>
    </div>
  )
}

export default HeroBar;