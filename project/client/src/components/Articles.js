import React from "react";
import "../styles/Articles.css";

import { Link } from "react-router-dom";
//picture imports
import SoftwareDevelopment from "../images/SoftwareDevelopment.jpg";
import business from "../images/Business.jpg";
import Investments from "../images/invest.jpg";
import Footer from "../images/footerbg.jpg";

function Articles()
{
    return(
        <div id = "articles-carousel-container">
            <h1 className = "articles-header">My articles</h1>
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <Link className = "article-link" to = "/articles/software-development">
      <img src= {SoftwareDevelopment} class="d-block w-50" alt="..."/>
      
      </Link>
      <p className = "article-type-1">Software Development</p>
    </div>
  
    <div class="carousel-item" data-bs-interval="2000">
      <Link className = "article-link" to = "/articles/business">
      <img src= {business} class="d-block w-50" alt="..."/>
      </Link>
      <p className = "article-type-2">Business</p>
    </div>
    
    <div class="carousel-item" data-bs-interval="2000">
      <Link className = "article-link" to = "/articles/investments">
      <img src= {Investments} class="d-block w-50" alt="..."/>
      </Link>
      <p className = "article-type-3">Investments</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
        </div>
    );
}

export default Articles;