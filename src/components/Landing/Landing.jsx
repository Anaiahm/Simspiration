import styles from './Landing.module.css'; 
import Welcome from '../Welcome/Welcome.jsx'
const Landing = () => {
  return (
    <main className={styles.container}>
      <img src="https://imgur.com/2T8rxN0.png" alt="Centered Image" className="sulsul"/>
      <Welcome/>
    </main>
  );
};

export default Landing;

