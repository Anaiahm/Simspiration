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
              <Link to="/cheats">Cheats</Link>
            </li>
            <li> 
              <Link to="/tips">Tips</Link>
            </li>
            <li> 
              <Link to="/buildchallenges">Build Challenges</Link>
            </li>
            <li> 
              <Link to="/gameplaychallenges">GamePlay Challenges</Link>
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
              <Link to='/posts'>All Posts</Link>
            </li>
            <li>
              <Link to="/cheats">Cheats</Link>
            </li>
            <li> 
              <Link to="/tips">Tips</Link>
            </li>
            <li> 
              <Link to="/buildchallenges">Build Challenges</Link>
            </li>
            <li> 
              <Link to="/gameplaychallenges">GamePlay Challenges</Link>
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