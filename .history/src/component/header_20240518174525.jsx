import React from 'react';
import { Link } from 'react-router-dom';
const heroLogo = './hero-overlay/images/AxteixLogo.svg';

const Header = () => {
    return(
        <div className="ov-header">
            <div className="container">
                <div className="navmenu">
                    <Link to="#">
                    <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
                        <h1>Astrix</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;