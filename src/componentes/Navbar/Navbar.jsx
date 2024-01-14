import React from 'react';
import './navbar.css';

function Navbar() {
  return (
      <>
        <div className="marquee">
            <div className="track">
                <div className="content">
                    FREE plane ticket 
                </div>
            </div>
        </div>
        <nav>
            <h1 className='navbar-link'>Tuki</h1>
        
            <ul className='navbar-links'>
                <li className='navbar-link'>About us</li>
                <li className='navbar-link'>Github</li>
            </ul>            
        </nav>
      </>
  )
}

export default Navbar