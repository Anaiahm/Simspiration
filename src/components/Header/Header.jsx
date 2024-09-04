import React from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faMoon, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'; 

function Header({ handleSignout }) {
    const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
    <header className={styles.container}>
      <div className={styles['header-content']}>
        <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className="centered-image" />
        <div className={styles['right-buttons']}>
          <Link to="/" className={styles['icon-link']}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
          <Link to="/favorites" className={styles['icon-link']}>
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/nightmode" className={styles['icon-link']}>
          <FontAwesomeIcon icon={faMoon} />
        </Link>
        <Link to="" onClick={handleSignout} className={styles['icon-link']}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
        </div>
            </div>
    </header>
    ) : (
        <header className={styles.container}>
             <div className={styles['header-content']}>
             <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className={styles['centered-image']} />
             <ul className={styles.logs}>
         <li>
              <Link to="/signin" className={styles.logs}>LOG IN</Link>
            </li>
            <li>
              <Link to="/signup" className={styles.logs}>SIGN UP</Link>
            </li>
            </ul>
        </div>
        </header>
     )}
     </>
  );
}

export default Header;
