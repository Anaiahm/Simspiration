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
              <Link to="/posts/cheats"><Icon category="Cheats" /> Cheats <Icon category="Cheats" /> </Link>
            </li>
            <li> 
              <Link to="/posts/tips"><Icon category="Tips" /> Tips <Icon category="Tips" /></Link>
            </li>
            <li> 
              <Link to="/posts/build"><Icon category="Build Challenges" /> Build Challenges <Icon category="Build Challenges" /></Link>
            </li>
            <li> 
              <Link to="/posts/game"><Icon category="GamePlay Challenges" /> GamePlay Challenges <Icon category="GamePlay Challenges" /></Link>
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

