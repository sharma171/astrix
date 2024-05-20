import React from "react";
import Header from "../header"
import "./css/hero.css"
const Hero = () => {
    return(
        <div className="floating-hero">
            <Header />
            <div className="hero-anim">
                <h3 className="hero-text"></h3>
                <img src={ImageOne} alt="" />
                <h3 className="hero-text"></h3>
                <img src={ImageTwo} alt="" />
            </div>
        </div>
    );
}
export default Hero;