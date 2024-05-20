import React from 'react';
import Hero from "./component/hero";
const Home = () => {
    return(
        <div>
            <div className={`floating-hero ${heroActive ? 'active' : ''}`} onClick={handleActive}>
                <Hero />
            </div>
        </div>
    );
}
export default Home;