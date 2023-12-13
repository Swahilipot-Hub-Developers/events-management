import NavBar from './Navbar';
import Footer from './Footer';
import MetaTags from './Metatags';
import Masthead from '@/components/Masthead';
import PortfolioGrid from '@/components/PortfolioGrid';
import Services from '@/components/Services';

const Layout = ({ children }) => {
  return (
    <>
      <MetaTags/>
      <NavBar />
      <main className='container-fluid'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
