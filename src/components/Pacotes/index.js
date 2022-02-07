import React from "react";
import './style.css';
import PacotesPrincipais from "./PacotesPrincipais";
import PacotesSecundarios from "./PacotesSecundarios";

function Pacotes() {
    return(
        <article className="container">
            <PacotesPrincipais/>
            <PacotesSecundarios/>
        </article>
    );
}

export default Pacotes;