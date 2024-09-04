import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from './NavBar.module.css'; 
import Icon from "../Icon/Icon";

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav className={styles.container}>
          <ul>
            <li>
              <Link to='/posts'>All Posts</Link>
            </li>
            <li>
              <Link to="/posts/cheats">Cheats <Icon category="Cheats" /> </Link>
            </li>
            <li> 
              <Link to="/posts/tips">Tips <Icon category="Tips" /></Link>
            </li>
            <li> 
              <Link to="/posts/build">Build Challenges <Icon category="Build Challenges" /></Link>
            </li>
            <li> 
              <Link to="/posts/game">GamePlay Challenges <Icon category="GamePlay Challenges" /></Link>
            </li>
            <li>
              <Link to="/posts/new">New Post</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.container}>
          <ul>
            <li>
              <Link to='/signin'>All Posts</Link>
            </li>
            <li>
              <Link to="/signin">Cheats <Icon category="Cheats"/> </Link>
            </li>
            <li> 
              <Link to="/signin">Tips <Icon category="Tips" /> </Link>
            </li>
            <li> 
              <Link to="/signin">Build Challenges <Icon category="Build Challenges" /></Link>
            </li>
            <li> 
              <Link to="/signin">GamePlay Challenges <Icon category="GamePlay Challenges" /></Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;

// <li>
//   <Link to="" onClick={handleSignout}>
//     Sign Out
//   </Link>
// </li>
// <li>
//   <Link to="/">Home</Link>
// </li>
{/* <li>
  <Link to="/signin">Sign In</Link>
</li>
<li>
  <Link to="/signup">Sign Up</Link>
</li> */}