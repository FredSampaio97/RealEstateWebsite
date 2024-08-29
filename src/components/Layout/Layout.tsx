import React from 'react'
import './Layout.css'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom';

const layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/' // Check if the current path is the home page
  
  
  
  
  return (
    <div>
      {isHomePage ? <Navbar1 /> : <Navbar2 /> }
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout