import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import FriendBar from './FriendBar';
import styles from '../CSS/friendList.module.css'
import { getFriends } from '../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function FriendList() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getFriends());
    }, [])
    const friends = useSelector(state => state.user.friends);
  return (
    <div className={styles.friendListContainer}>
        <form className={styles.queryForm} action="">
            <input className={styles.searchInput} type='text' placeholder='Search...' name='search'/>
        </form>
        <div className={styles.menuIcon}>
            <RxHamburgerMenu />
            <IoIosSearch />
        </div>
        <div className={styles.friendList}>
            {
              friends.map((friend, index) => {
                return <FriendBar 
                key={index} 
                name={friend.username} 
                id={friend._id}
                image={friend.dp}
              />
              })
            }
        </div>
    </div>
  )
}

export default FriendList;