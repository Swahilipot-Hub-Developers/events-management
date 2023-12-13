// components/ProtectedRoute.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user has the access token, otherwise redirect to the login page
    const isAuthenticated = !!localStorage.getItem('access_token');

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
