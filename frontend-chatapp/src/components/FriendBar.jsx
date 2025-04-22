import React from 'react'
import styles from'../CSS/friendBar.module.css';
import { CgProfile } from "react-icons/cg";
function FriendBar({image, name, id}) {

  const handleClick = () => {
    
  }
  return (
    <div onClick={handleClick} className={styles.friendBar}>
        {
            image? <img src={image} alt={name} className={styles.friendBarImage} />:<CgProfile className={styles.friendBarImage}/>
        }
        <div className={styles.infoBox}>
            <div>
                <h3 className={styles.friendName}>{name}</h3>
                <p className={styles.id}>{id}</p>
            </div>
        </div>
    </div>
  )
}

export default FriendBar