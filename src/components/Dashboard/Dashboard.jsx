import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import Landing from '../Landing/Landing';
import styles from './Dashboard.module.css'

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main className={styles.container}>
      <h1>Sul Sul, {user.username.toUpperCase ()}!</h1>
      <Landing />
    
    </main>
  );
};

export default Dashboard;
