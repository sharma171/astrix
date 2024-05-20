import React , { useState } from "react";
import Header from "./header";
import "./hero-overlay/css/hero.css";
import ImageOne from "./hero-overlay/images/heroimage1.jpeg";
import ImageTwo from "./hero-overlay/images/heroimage2.jpeg";
import ImageThree from "./hero-overlay/images/heroimage3.jpg";
import ImageFour from "./hero-overlay/images/heroimage4.png";
import ImageFive from "./hero-overlay/images/heroimage5.png";
import ImageSix from "./hero-overlay/images/heroimag6.png";
import ImageSeven from "./hero-overlay/images/heroimage7.png";
import ImageEight from "./hero-overlay/images/heroimage8.png";
const Hero = () => {
    const [heroActive, setHeroActive] = useState(false);
    const handleActive = () => {
        setHeroActive(!heroActive);
    }
    return(
        <div className={`floating-hero ${heroActive ? 'active' : ''}`} onClick={handleActive}>
            <Header />
            <div className={`container`} >
                <div className={`hero-anim row-flex`}>
                    <h3 className="hero-text">WE</h3>
                    <img className="hero-image" src={ImageOne} alt="" />
                    <h3 className="hero-text">ORGANIZE THE</h3>
                    <h3 className="hero-text">CONNECTION</h3>
                    <img className="hero-image" src={ImageTwo} alt="" />
                    <img className="hero-image" src={ImageThree} alt="" />
                    <h3 className="hero-text">BETWEEN</h3>
                    <img className="hero-image" src={ImageFour} alt="" />
                    <h3 className="hero-text">MUSIC</h3>
                    <h3 className="hero-text">ARTIST</h3>
                    <img className="hero-image" src={ImageFive} alt="" />
                    <h3 className="hero-text">CULTURE</h3>
                    <img className="hero-image" src={ImageSix} alt="" />
                    <img className="hero-image" src={ImageSeven} alt="" />
                    <h3 className="hero-text">ART</h3>
                    <img className="hero-image" src={ImageEight} alt="" />
                    <h3 className="hero-text">& COLLECTION</h3>
                </div>
            </div>
        </div>
    );
}
export default Hero;