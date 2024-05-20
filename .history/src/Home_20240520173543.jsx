import React, { useState } from 'react';
import Hero from "./component/hero";
import HomeSection from './component/homesection';
const Home = () => {
    const [heroActive, setHeroActive] = useState(false);
    const handleActive = () => {
        setHeroActive(!heroActive);
    }
    return(
        <div>
            <div className={`floating-hero ${heroActive ? 'active' : ''}`} onClick={handleActive}>
                <Hero />
            </div>
            <div className={`homesection ${heroActive ? 'active' : ''}`}>
                <HomeSection />
            </div>
        </div>
    );
}
export default Home;