import React from "react";
import './style.css';

function Sobre() {
    return(
        <article>
            <div className="container">
                <div className="row ">
                    <div className="col-12 text-center my-5">
                        <h1 className="display-4 text-white"><strong>Lorem Ipsum</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6 text-center d-flex align-items-center text-white">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of type and scrambled it to make a type 
                           specimen book. It has survived not only five centuries, but also the leap into 
                           electronic typesetting, remaining essentially unchanged. It was popularised in 
                           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                           and more recently with desktop publishing software like Aldus PageMaker including 
                           versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6">
                        <img className="redimensao-img-sobre" src="/images/logo-agencia-de-viagens.png" alt=""/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Sobre;