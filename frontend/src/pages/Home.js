// // pages/home.js

// import ProtectedRoute from '@/components/ProtectedRoute';
// import HomePage from '@/components/Homepage';

// const Home = () => {
//   return (
    
//     <ProtectedRoute>
//       <HomePage />
//     </ProtectedRoute>
//   );
// };

// export default Home;
// pages/index.js or pages/_app.js

import { useRouter } from 'next/router';
import LoginForm from './LogIn';
import HomePage from '@/components/Homepage';

const App = () => {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login'; // Add more conditions as needed

  // Simulate user authentication status
  const isAuthenticated = true; // Replace with your actual authentication check

  if (isLoginPage) {
    return <LoginForm />;
  }

  if (router.pathname === '/home' && isAuthenticated) {
    const username = 'John Doe'; // Replace with the actual username
    return <HomePage username={username} />;
  }

  // Add other pages or components here

  return <div>Page not found</div>;
};

export default App;
