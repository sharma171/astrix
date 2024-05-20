import React , { useState } from "react";
import Header from "../header";
import "./css/hero.css";
import ImageOne from "./images/heroimage1.jpeg";
import ImageTwo from "./images/heroimage2.jpeg";
import ImageThree from "./images/heroimage3.jpg";
import ImageFour from "./images/heroimage4.png";
import ImageFive from "./images/heroimage5.png";
import ImageSix from "./images/heroimag6.png";
import ImageSeven from "./images/heroimage7.png";
import ImageEight from "./images/heroimage8.png";
const Hero = () => {
    const [heroActive, setHeroActive] = useState(false);
    const handleActive = () => {
        setHeroActive(!heroActive);
    }
    return(
        <div className="floating-hero">
            <Header />
            <div className={`container ${heroActive ? 'active' : ''}`} onClick={handleActive}>
                <div className={`hero-anim row-flex`} onClick={handleActive}>
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