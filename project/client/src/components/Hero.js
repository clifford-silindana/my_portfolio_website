import React from "react";
import the_clifford_bg from "../images/the_clifford_bg.jpg";
import "../styles/Hero.css";

function Hero()
{
    return(
        <div id = "hero" className = "hero">
            <img className = "hero-image" src={the_clifford_bg} alt="man standing" />
            <div className = "hero-text">
                <h1 className = "hero-text-heading">HI, I'M CLIFFORD SILINDANA</h1>
                <p className = "hero-text-para">I am a Computer Science and Business Computing student at the University of Cape Town</p>
                <p className = "hero-text-para"></p>
                <br />
                <p className = "hero-text-para"> My fields of interest are:</p>
                    
                    <ul className = "fields-of-interests">
                        <div>
                        <li className = "hero-text-para">Software Development</li>        
                        <li className = "hero-text-para">Data Science</li>
                        </div>
                        <div>    
                        <li className = "hero-text-para">Business</li>    
                        <li className = "hero-text-para">Investing</li>
                        </div>    
                    </ul>    
               
            </div>

        </div>
    );
}

export default Hero;