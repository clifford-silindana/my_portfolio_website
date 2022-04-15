import React from "react";

import "../styles/Projects.css";

import {Link} from "react-router-dom";

//picture imports
import web2 from "../images/web2.jpg";
import web3 from "../images/web3.jpeg";
import DataScience from "../images/DataScience.jpg";


function Projects()
{
    return(
        <div id = "projects-section">
          <h1 className = "projects-header">My projects</h1>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <Link to = "/projects/web2">
      <img src= {web2} className="d-block w-50" alt="..."/>
      </Link>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <Link to = "/projects/web3">
      <img src= {web3} class="d-block w-50" height = "100%" alt="..."/>
      </Link>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <Link to = "/projects/data-science">
      <img src= {DataScience} class="d-block w-50" alt="..."/>
      </Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>
        

    )

};

export default Projects;