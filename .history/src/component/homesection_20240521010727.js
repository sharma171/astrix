import React, {useState} from "react";
import "./home.css";
import AstrixIcon from "./images/asterlogo.png"; 
import CarImage1 from "./images/car-image.png";
import CarImage2 from "./images/car-image2.png";
import CarImage3 from "./images/car-image3.png";
import CarImage4 from "./images/car-image4.png";
import LocationIcon from "./images/location.svg";
import TickerIcon from "./images/ticker-icon.png";
import LocIcon from "./images/locicon.png";
import TimeIcon from "./images/time-icon.png";
import Artistbanner from "./images/artist-img.png";
import QrIcon from "./images/qricon.png";
import Collection1 from "./images/collection-1.png";
import Collection2 from "./images/Collection2.png";
import ComntImg from "./images/comntimg.png";
import Collectimg1 from "./images/collective-demo.png"

const HomeSection = () => {
    const [activeItem, setActiveItem] = useState('Events'); // Default to 'Events'

    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    return(
        <>
            <div className="bigcontainer">
                <div className="row-flex home-row">
                    <div className="col-flex car-row-col">
                        <div className="row-flex car-row-row">
                            <div className="car-col">
                                <div className="homebrand">
                                    <img src={AstrixIcon} alt="" />
                                </div>
                                <div className={`carousel-inner ${activeItem === 'Events' ? 'active' : ''}`}>
                                    <span className="one">AST<br></br>RIX</span>
                                    <span className="two">EVE<br></br>NTS</span>
                                    <div className="carousel-box">
                                        <div className="car-item">
                                            <img src={CarImage1} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                <h3 className="eventname">Event Name</h3>
                                                <div className="location row-flex">
                                                    <img src={LocationIcon} alt="" className="icon" />
                                                    <span>Location</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage2} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                <h3 className="eventname">Event Name</h3>
                                                <div className="location row-flex">
                                                    <img src={LocationIcon} alt="" className="icon" />
                                                    <span>Location</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage3} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                <h3 className="eventname">Event Name</h3>
                                                <div className="location row-flex">
                                                    <img src={LocationIcon} alt="" className="icon" />
                                                    <span>Location</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage4} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                <h3 className="eventname">Event Name</h3>
                                                <div className="location row-flex">
                                                    <img src={LocationIcon} alt="" className="icon" />
                                                    <span>Location</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`carousel-inner ${activeItem === 'Collections' ? 'active' : ''}`}>
                                    <span className="one">AST<br></br>RIX</span>
                                    <span className="two">COLLE<br></br>CTIONS</span>
                                    <div className="carousel-box">
                                        <div className="car-item">
                                            <img src={Collection1} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                            </div>
                                                <h3 className="top-head">Lunar Palace</h3>
                                        </div>
                                        <div className="car-item">
                                            <img src={Collection2} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                
                                            </div>
                                            <h3 className="top-head">Lunar Palace</h3>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage3} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                
                                            </div>
                                            <h3 className="top-head">Lunar Palace</h3>
                                        </div>
                                        <div className="car-item">
                                            <img src={CarImage4} alt="carousel" className="carimg" />
                                            <div className="overlay col-flex">
                                                
                                            </div>
                                            <h3 className="top-head">Lunar Palace</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-tabs row-flex">
                                    <span className={`tabspan ${activeItem === 'Events' ? 'active' : ''}`} onClick={() => handleItemClick('Events')}>Events</span>
                                    <span className={`tabspan ${activeItem === 'Collections' ? 'active' : ''}`} onClick={() => handleItemClick('Collections')}>Collections</span>
                                </div>
                            </div>
                            <div className="tick-col col-flex">
                                <div className="ticker-box col-flex">
                                    <div className="ticker-inner col-flex">
                                        <img src={TickerIcon} alt="" className="ticker-icon" />
                                        <span>Oasis Bus tour, JLN stadium, Delhi</span>
                                    </div>
                                    <div className="ticker-inner col-flex">
                                        <img src={TickerIcon} alt="" className="ticker-icon" />
                                        <span>Collection Live : Meta Classes,  JLN stadium, Delhi</span>
                                    </div>
                                    <div className="ticker-inner col-flex">
                                        <img src={TickerIcon} alt="" className="ticker-icon" />
                                        <span>Oasis Bus tour, JLN stadium, Delhi</span>
                                    </div>
                                    <div className="ticker-inner col-flex">
                                        <img src={TickerIcon} alt="" className="ticker-icon" />
                                        <span>Collection Live : Meta Classes,  JLN stadium, Delhi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-flex evnt-col">
                        <div className={`form evnts ${activeItem === 'Events' ? 'active' : ''}`}>
                            <h3 className="topheading">
                                Explore Your First<br></br> Event
                            </h3>
                            <h2 className="main-head">
                                Event Name
                            </h2>
                            <div className="venue-time row-flex">
                                <div className="location-time row-flex">
                                    <img src={LocIcon} alt="" className="loc-icon" />
                                    <span className="loc-text">Venue</span>
                                </div>
                                <div className="location-time row-flex">
                                    <img src={TimeIcon} alt="" className="loc-icon" />
                                    <span className="loc-text">04/3/2024 @19:00</span>
                                </div>
                            </div>
                            <p className="para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, corrupti! Impedit ratione autem nihil magni tempore hic rerum deserun
                            </p>
                            <h3 className="artist-head">
                                Artist Lineup
                            </h3>
                            <div className="artist-section row-flex">
                                <img src={Artistbanner} alt="" className="artist-img" />
                            </div>
                            <div className="submit-row row-flex">
                                <img src={QrIcon} alt="" className="qricon"/>
                                <button className="submit">Join Waitlist</button>
                            </div>
                        </div>
                        <div className={`form collns ${activeItem === 'Collections' ? 'active' : ''}`}>
                            <h3 className="topheading">
                                Explore Your First<br></br> Collections
                            </h3>
                            <h2 className="main-head">
                                Meta<br></br>Lives
                            </h2>
                            
                            <h3 className="artist-head">
                                Live in Astrix
                            </h3>
                            <p className="para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, corrupti! Impedit ratione autem nihil magni tempore hic rerum deserun
                            </p>
                            <img src={ComntImg} alt="Cmstimg" className="astrix-interest" />
                            <p className="para" style={{marginTop:"10px"}}>Collectibles</p>
                            <div className="collectibles row-flex invisible-scrollbar">
                                <img src={Collectimg1} alt="collect" className="collect-img" />
                                <img src={Collectimg1} alt="collect" className="collect-img" />
                                <img src={Collectimg1} alt="collect" className="collect-img" />
                                <img src={Collectimg1} alt="collect" className="collect-img" />
                            </div>
                            <div className="submit-row row-flex">
                                <button className="submit">Join Waitlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeSection;