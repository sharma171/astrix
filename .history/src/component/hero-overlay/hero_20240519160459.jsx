import React from "react";
import Header from "../header"
import "./css/hero.css"
const Hero = () => {
    return(
        <div className="floating-hero">
            <Header />
            <div className="hero-anim">
                <h3 className="hero-text"></h3>
                <img src={textImage1} alt="" />
            </div>
        </div>
    );
}
export default Hero;