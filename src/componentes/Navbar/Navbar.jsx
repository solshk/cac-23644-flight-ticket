import React from 'react';
import './navbar.css';

function Navbar() {
  return (
      <>
        <div className="marquee">
            <div className="track">
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi saepe consectetur, aut animi quia perspiciatis recusandae laborum esse facilis deleniti non quibusdam blanditiis culpa fuga architecto consequatur. Doloremque, reprehenderit dolores. 
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