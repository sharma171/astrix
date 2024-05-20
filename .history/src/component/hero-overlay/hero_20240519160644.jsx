import React from "react";
import Header from "../header"
import "./css/hero.css"
const Hero = () => {
    return(
        <div className="floating-hero">
            <Header />
            <div className="hero-anim">
                <h3 className="hero-text">WE</h3>
                <img src={ImageOne} alt="" />
                <h3 className="hero-text">ORGANIZE THE</h3>
                <h3 className="hero-text">CONNECTION</h3>
                <img src={ImageOne} alt="" />
                
            </div>
        </div>
    );
}
export default Hero;