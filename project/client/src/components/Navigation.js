import React from "react";
import the_clifford_W from "../images/the_clifford_W.svg";
import "../styles/Navigation.css";

function Navigation()
{
    return(
         <div className="navigation">
            <a href="#"><img src= {the_clifford_W} alt="" width="45" className = "Logo"></img></a>
            <ul className = "nav-links">
                <li><a className = "nav-link" href="#projects">PROJECTS</a></li>    
                <li><a className = "nav-link" href="#articles">ARTICLES</a></li>    
                <li><a className = "nav-link" href="#contact">SAY HELLO &#128522;</a></li>    
            </ul>
        </div>
         

    );
}

export default Navigation;