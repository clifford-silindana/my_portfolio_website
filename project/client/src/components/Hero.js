import React from "react";
import the_clifford_bg from "../images/the_clifford_bg.jpg";
import "../styles/Hero.css";

function Hero()
{
    return(
        <div className = "hero">
            <img className = "hero-image" src={the_clifford_bg} alt="man standing" />
            <div className = "hero-text">
                <h1 className = "hero-text-heading">HI, I'M CLIFFORD SILINDANA</h1>
                <p className = "hero-text-para">I am a Computer Science and Business Computing student</p>
                <p className = "hero-text-para">at the University of Cape Town</p>
                <br />
                <p className = "hero-text-para"> My fields of interest are:</p>
                    
                    <ul>
                        <li className = "hero-text-para">Software development (web 2.0 & web 3.0)</li>        
                        <li className = "hero-text-para">Data Science</li>    
                        <li className = "hero-text-para">Business</li>    
                        <li className = "hero-text-para">Investing</li>    
                    </ul>    
               
            </div>

        </div>
    );
}

export default Hero;