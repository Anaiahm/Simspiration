import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Sul Sul, {user.username}!</h1>
      <p>
        Here are all your posts
      </p>
    </main>
  );
};

export default Dashboard;
