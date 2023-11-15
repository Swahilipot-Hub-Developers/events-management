// components/NavBar.js

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
            <div  className="navbar-brand"></div>
       Your Logo
        </Link>
        <button
          className="navbar-toggler"
    
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          alli
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              
              <Link href="/">
              <div className="nav-link">
                Home
                
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
              <div className="nav-link">
              About us
                
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div className="nav-link">
                Contact us
                
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div className="nav-link">
                Log In
                
                </div>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
