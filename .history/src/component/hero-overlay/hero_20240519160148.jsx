import React from "react";
import Header from "../header"
import "./css/hero.css"
const Hero = () => {
    return(
        <div className="floating-hero">
            <Header />
            <div className="hero-illustrative"></div>
        </div>
    );
}
export default Hero;