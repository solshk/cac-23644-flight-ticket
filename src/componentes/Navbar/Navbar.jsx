import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <h1>Tuki</h1>

                    <ul className='navbar-links'>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="https://github.com/solshk/cac-23644-flight-ticket" rel="noopener noreferrer" className="active">Github</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar