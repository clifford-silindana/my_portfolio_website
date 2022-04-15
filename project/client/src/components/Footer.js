import React from "react";
import "../styles/Footer.css";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import footerbg from "../images/footerbg.jpg";



function Footer()
{
    return(
        <div id = "footer-section">
            <h1 className = "footer-header">Get in touch</h1>
            <div className = "footer-body">
                <Contact />
                <ContactForm />
            </div>
        </div>
    );
}

export default Footer;