// import '@/styles/globals.css'
// import '@/styles/scss/theme.scss'
// import Layout from '@/layout/layout'


// export default function App({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import '@/styles/scss/theme.scss';
import Layout from '@/layout/layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/LogIn'; // Adjust the login page path accordingly
  const isSignupPage = router.pathname === '/SignUp'; // Add this line for the signup page
  

  return (
    <>
      {isLoginPage || isSignupPage ? (
        // Render the component without the layout on the login/signup pages
        <Component {...pageProps} />
      ) : (
        // Render the component with the layout on other pages
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

