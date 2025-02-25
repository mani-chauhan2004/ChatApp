import React from 'react'
import '../CSS/contactList.css'
function ContactList() {
  return (
    <div className='contact-list-container'>
        <form className='query-form' action="">
            <input className='search-input' type='text' placeholder='Search...' />
        </form>
        <div className='contact-container'>

        </div>
    </div>
  )
}

export default ContactList