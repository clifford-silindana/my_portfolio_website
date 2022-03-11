import React from "react";
import the_clifford from "../images/the_clifford_bg.jpg";
import profile from "../images/profile.jpg";
import AMG from "../images/AMG.jpg";
import "../styles/Projects.css";

function Projects()
{
    return(
        <div className = "projects-section" id = "projects">
           <div className = "articles">
            <h1 className = "articles-header">My projects</h1>
            <div className = "artciles-section">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className = "article-thumbnail-cover">
                            <img className = "article-thumbnail" src= {the_clifford} alt="" />
                        </div>
                        <div className = "article-description">
                            <h1>Defi App</h1>
                            <p>Decentralized Finance app.</p>
                        </div>
                    
                    </div>
                    <div class="carousel-item">
                        <div className = "article-thumbnail-cover">
                            <img className = "article-thumbnail" src= {profile} alt="" />
                        </div>
                        <div className = "article-description">
                            <h1>Crpto Trader</h1>
                            <p>Cryptocurrency trading app.</p>
                        </div>
                    
                    </div>
                    <div class="carousel-item">
                        <div className = "article-thumbnail-cover">
                            <img className = "article-thumbnail" src = {AMG} alt="" />
                        </div>
                        <div className = "article-description">
                            <h1>Realtor</h1>
                            <p>Real estate leaser app.</p>
                        </div>
                    
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    </div>
        </div>
    );
};

export default Projects;