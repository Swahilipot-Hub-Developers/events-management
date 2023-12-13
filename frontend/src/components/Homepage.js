// components/HomePage.js

import HomeNavbar from './HomeNavbar';

const HomePage = ({ username }) => {
  return (
    <div>
      <HomeNavbar username={username} />

      <div>
        <h2>Welcome, {username}!</h2>
        <p>This is the home page.</p>
      </div>
    </div>
  );
};

export default HomePage;
