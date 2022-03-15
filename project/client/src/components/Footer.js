import React from "react";
import "../styles/Footer.css";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import footerbg from "../images/footerbg.jpg";



function Footer()
{
    return(
        <div className = "footer-section" id = "footer">
            <h1 className = "footer-header">Contact Me</h1>
            <div className = "footer-body">
                <Contact />
                <ContactForm />
            </div>
           
            
           

        </div>
    );
}

export default Footer;