import React from 'react'
import '../CSS/signupPage.css'
function SignupPage() {
  return (
    <div className='signup-container'>
      <form action="" className='signup-form'>
        <h1 className='signup-header'>Sign Up</h1>
        <input type="text" className='signup-input' name="username" id="username" placeholder='Username'/>
        <input type="email" className='signup-input' name="email" id="email" placeholder='Email'/>
        <input type="password" className='signup-input' name="password" id="password" placeholder='Password'/>
        <input type="password" className='signup-input' name="confirm-password" id="confirm-password" placeholder='Confirm Password'/>
        <button type='submit' className='signup-button'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupPage;