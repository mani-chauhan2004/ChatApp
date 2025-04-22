import React, { useEffect } from 'react';
import ContactList from '../components/ContactList';
import MessageWindow from '../components/MessageWindow';
import UtilityBar from '../components/UtilityBar';
import HeroBar from '../components/HeroBar';
import MessageForm from '../components/MessageForm';
import styles from '../CSS/messagePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDp } from '../redux/features/userSlice';
import FriendList from '../components/FriendList';
import { Outlet } from 'react-router';
function MessagePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDp());
  }, [])
  return (
    <div className={styles.messagePage}>
        <div className={styles.navbarHolder}>
            <UtilityBar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default MessagePage;