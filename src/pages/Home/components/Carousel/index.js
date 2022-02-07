import React from "react";
import './style.css';

function Carousel() {
    return(
        <section id="carouselSite" className="carousel slide container my-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselSite" data-slide-to="0" className="active"></li>
                <li data-target="#carouselSite" data-slide-to="1"></li>
                <li data-target="#carouselSite" data-slide-to="2"></li>
            </ol>
    
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/foto-1.jpg" alt="Foto de carrossel" className="img-fluid d-block"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="margin-bottom display-1"><strong>+Viagens</strong></h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/foto-2.jpg" alt="Foto de carrossel" className="img-fluid d-block"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="margin-bottom display-1"><strong>+Viagens</strong></h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/foto-3.jpg" alt="Foto de carrossel" className="img-fluid d-block"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="margin-bottom display-1"><strong>+Viagens</strong></h1>
                    </div>
                </div>
            </div>
    
            <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Anterior</span>
            </a>
    
            <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Avançar</span>
            </a>
        </section>
    );
}

export default Carousel;