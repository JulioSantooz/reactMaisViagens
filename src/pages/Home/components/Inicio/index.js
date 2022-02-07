import React from "react";

function Inicio() {
    return(
        <div className="carousel-item active">
            <img src="/images/foto-2.jpg" alt="Foto de carrossel" className="img-fluid d-block"/>
            <div className="carousel-caption d-none d-md-block">
                <h1 className="margin-bottom display-1"><strong>+Viagens</strong></h1>
            </div>
        </div>
    );
}

export default Inicio;