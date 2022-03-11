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
                <li className="contact-links-item"><a className="contact-link" href="https://www.linkedin.com/in/clifford-silindana-06937b121/"><img className="contact-link-img" src={github}alt="linkedin"/></a></li>
                <li className="contact-link-item"><a className="contact-link" href="#"><img className="contact-link-img" src={linkedin}alt="twitter"/></a></li>
                <li className="contact-link-item"><a className="contact-link" href="#"><img className="contact-link-img" src={twitter}alt="linkedin"/></a></li>
                <li className="contact-link-item"><a className="contact-link" href="https://github.com/clifford-silindana"><img className="contact-link-img" src={email}alt="linkedin"/></a></li>
            </ul>
        </div>
    );
};

export default Contact;