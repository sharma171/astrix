import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ov-header">
            <div className="container">
                <div className="navmenu">
                    <Link to="#">
                        <img src="./hero-overlay/images/Axteix-logo.svg" alt="" />
                        Astrix</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;