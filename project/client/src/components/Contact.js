import React from "react";
import profile from "../images/profile.jpg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import email from "../images/email.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import "../styles/Contact.css";

function Contact()
{
    return(
        <div className = "contact" id = "contact">
            <img className = "contact-image"src={profile} alt="profile picture"></img>
            
            <ul className = "contact-links">
                <li className="contact-links-item"><a className="contact-link" href="https://www.linkedin.com/in/clifford-silindana-06937b121/"><img className="contact-link-img" src={linkedin}alt="linkedin" target = "_blank"/></a></li>
                <li className="contact-link-item"><a className="contact-link" href="https://github.com/clifford-silindana"><img className="contact-link-img" src={github}alt="twitter" target = "_blank"/></a></li>
                <li className="contact-link-item"><a className="contact-link" href="https://twitter.com/The_Clifford_"><img className="contact-link-img" src={twitter}alt="linkedin" target = "_blank"/></a></li>
            </ul>
        </div>
    );
};

export default Contact;