import React from "react";
import './footer.css';

function Footer() { 

    return (
        <footer>
            <ul className='navbar-links-footer' id='navbar-links-footer'>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="https://github.com/solshk/cac-23644-flight-ticket" rel="noopener noreferrer" className="active">Github</a>
                </li>
            </ul>
            <div className="footerp">
                <p className="footer__creditos">Made with ❤ by <a href="https://github.com/solshk">solshk</a></p>
            </div>            
        </footer>
    )
}

export default Footer