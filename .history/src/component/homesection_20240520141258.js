import React from "react";
import "./home.css"
import AstrixIcon from "./images/asterlogo.png" 
import CarImage1 from "./images/car-image.png"

const HomeSection = () => {
    return(
        <>
            <div className="bigcontainer">
                <div className="row-flex">
                    <div className="col-flex car-row-col">
                        <div className="row-flex car-row-row">
                            <div className="car-col">
                                <div className="homebrand">
                                    <img src={AstrixIcon} alt="" />
                                </div>
                                <div className="carousel-inner">
                                    <span className="one">AST<br></br>RIX</span>
                                    <span className="two">EVE<br></br>NTS</span>
                                    <div className="carousel-box">
                                        <div className="car-item">
                                            <img src={CarImage1} alt="carousel" className="carimg" />
                                            <div className="overlay">
                                                
                                            </div>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage1} alt="carousel" className="carimg" />
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage1} alt="carousel" className="carimg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tick-col"></div>
                        </div>
                    </div>
                    <div className="col-flex evnt-col">

                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeSection;