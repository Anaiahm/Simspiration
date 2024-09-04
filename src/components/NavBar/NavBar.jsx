import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.css'; 

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li>
              <Link to='/posts'>All Posts</Link>
            </li>
            <li>
              <Link to="/posts/cheats">Cheats</Link>
            </li>
            <li> 
              <Link to="/posts/tips">Tips</Link>
            </li>
            <li> 
              <Link to="/posts/build">Build Challenges</Link>
            </li>
            <li> 
              <Link to="/posts/game">GamePlay Challenges</Link>
            </li>
            <li>
              <Link to="/posts/new">New Post</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to='/signin'>All Posts</Link>
            </li>
            <li>
              <Link to="/signin">Cheats</Link>
            </li>
            <li> 
              <Link to="/signin">Tips</Link>
            </li>
            <li> 
              <Link to="/signin">Build Challenges</Link>
            </li>
            <li> 
              <Link to="/signin">GamePlay Challenges</Link>
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