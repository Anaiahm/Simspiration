import React from 'react';
import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faMoon, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header({ handleSignout }) {
    const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
    <header>
      <div className="header-content">
        <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className="centered-image" />
        <div className="right-buttons">
          <Link to="/" className="icon-link">
          <FontAwesomeIcon icon={faHome} />
        </Link>
          <Link to="/favorites" className="icon-link">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/nightmode" className="icon-link">
          <FontAwesomeIcon icon={faMoon} />
        </Link>
        <Link to="" onClick={handleSignout} className="icon-link">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
        </div>
            </div>
    </header>
    ) : (
        <header>
             <div className="header-content">
             <img src="https://imgur.com/dqOzWaR.png" alt="Centered Image" className="centered-image" />
         <li>
              <Link to="/signin" className='logs'>LOG IN</Link>
            </li>
            <li>
              <Link to="/signup" className='logs'>SIGN UP</Link>
            </li>
        </div>
        </header>
     )}
     </>
  );
}

export default Header;

{/* <Link to="/" className="icon-link">
    <FontAwesomeIcon icon={faHome} />
    </Link>
    <Link to="/nightmode" className="icon-link">
    <FontAwesomeIcon icon={faMoon} />
    </Link> */}
{/* <button>
    <FontAwesomeIcon icon={faHome} />
    </button>
    <button>
    <FontAwesomeIcon icon={faUser} />
    </button>
    <button>
    <FontAwesomeIcon icon={faHeart} />
    </button>
    <button>
    <FontAwesomeIcon icon={faMoon} />
    </button>
    <button>
    <FontAwesomeIcon icon={faSignOutAlt} />
    </button> */}
    // <Link to="/dashboard" className="icon-link">
    //   <FontAwesomeIcon icon={faUser} />
    // </Link>