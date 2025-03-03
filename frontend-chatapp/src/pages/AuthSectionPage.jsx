import React from 'react'
import '../CSS/authSectionPage.css'
function AuthSectionPage() {
  return (
    <div className='auth-section-container'>
        <div className="auth-section">
            <h1 className='get-started-heading'>Get Started</h1>
            <p className='get-started-description'>Flight to million Chats and Convos ready to go. Welcome onboard...</p>
            <div className='logo-container'>
                <img className='auth-section-logo-img' src="./src/assets/apple-touch-icon.png" alt=""/>
                <h1 className='convos-text'>Convos</h1>
            </div>
            <div className="auth-buttons">
                <div className='signup-section'>
                    <h2 className='auth-message'>New User?</h2>
                    <button className='signup-button'>Sign Up</button>
                </div>
                <div className="login-section">
                    <h2 className='auth-message'>Already a User?</h2>
                    <button className='login-button'>Log In</button>
                </div>
            </div>
                <h4 className='c-bits'><span className='logo'>C.</span>Bits</h4>
        </div>
    </div>
  )
}

export default AuthSectionPage;