import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ov-header">
            <div className="container">
                <div className="navmenu">
                    <Link to="#">
                        <img 
                            src={herologo}
                            alt="Asterix-logo" 
                        />
                        <h1>Astrix</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;