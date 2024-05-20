import React from 'react';
import Hero from "./component/hero";
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
        </div>
    );
}
export default Home;