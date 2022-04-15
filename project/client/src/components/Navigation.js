import React from "react";
import { Link } from "react-router-dom";
import the_clifford_W from "../images/the_clifford_W.svg";
import "../styles/Navigation.css";


function Navigation()
{
    return(

        <div className="navigation">
        <Link to ="/home"><img src= {the_clifford_W} alt="" width="45" className = "Logo"></img></Link>
        <ul className = "nav-links">  
            <li><Link className = "nav-link" to ="#projects-section">PROJECTS</Link></li>    
            <li><Link className = "nav-link" to ="#articles-carousel-container">ARTICLES</Link></li>    
            <li><Link className = "nav-link" to ="#footer-section">SAY HELLO &#128522;</Link></li>    
        </ul>
        
    </div>

         

    );
}

export default Navigation;

/*


*/