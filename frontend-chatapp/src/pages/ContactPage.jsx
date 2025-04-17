import React from 'react';
import ContactList from '../components/ContactList';
import styles from '../CSS/ContactPage.module.css'
import UtilityBar from '../components/UtilityBar';
function ContactPage() {
    return (
        <div className={styles.contactListHolder}>
            <div className={styles.utilityBarHolder}>
                <UtilityBar/>
            </div>
            <ContactList/>
        </div>
    )
}

export default ContactPage