import React from "react";
import './style.css';

function Titulo(props) {
    return(
        <section className="img-fundo-titulo">
            <h1>{props.titulo}</h1>
        </section>
    );
}

export default Titulo;