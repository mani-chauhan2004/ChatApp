import React from 'react';
import '../CSS/homePage.css';
import AuthSectionPage from './AuthSectionPage';
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

function HomePage() {
  return (
    <div className='page-container'>
        <div className='home-container'>
            <div className='hero-container'>
                <h1 className='company-logo'><span className='logo-span'>C.</span>Bits</h1>
                <div className='hero-text'>
                    <img src="./src/assets/android-chrome-192x192.png" alt=""/>
                    <h1 className='convos-text'>Convos</h1>
                </div>
                <div>
                    <p className='powered-by'>Powered by</p>
                    <div className='tech-stack'>
                        <FaReact className='react-icon'/>
                        <DiMongodb className='mongodb-icon'/>
                        <SiExpress className='express-icon'/>
                    </div>
                </div>
                <div className='help-and-support'><p>Help and Support</p></div>
            </div>
            <AuthSectionPage />
        </div>
    </div>
  )
}

export default HomePage;