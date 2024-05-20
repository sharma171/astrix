import React from "react";
import "./home.css"
import AstrixIcon from "./images/asterlogo.png" 

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
                                    <div className="bgtext">
                                        <span className="one">AST<br></br>RIX</span>
                                        <span className="two">EVE<br></br>NTS</span>
                                    </div>
                                    <div className="carousel-box">
                                        <div className="car-item">
                                            <img src={CarImage1} alt="" />
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