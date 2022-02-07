import React from "react";

function PacotesPrincipais() {
    return(
        <article>
            <div className="row g-3">
                <div className="col-sm-6 col-md-4 col-lg-3 my-4">
                    <div className="card">
                        <img className="card-img-top img-card" src="/images/londres.jpg" alt="Card image"/>
                        <div className="card-body">
                          <h4 className="card-title">John Doe</h4>
                          <h6 className="card-title">R$ 00,00</h6>
                          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                          <a href="#" className="btn btn-block text-white cor-secundaria">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 my-4">
                    <div className="card">
                        <img className="card-img-top img-card" src="/images/paris.jpg" alt="Card image"/>
                        <div className="card-body">
                          <h4 className="card-title">John Doe</h4>
                          <h6 className="card-title">R$ 00,00</h6>
                          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                          <a href="#" className="btn btn-block text-white cor-secundaria">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 my-4">
                    <div className="card">
                        <img className="card-img-top img-card" src="/images/rio.jpg" alt="Card image"/>
                        <div className="card-body">
                          <h4 className="card-title">John Doe</h4>
                          <h6 className="card-title">R$ 00,00</h6>
                          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                          <a href="#" className="btn btn-block text-white cor-secundaria">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 my-4">
                    <div className="card">
                        <img className="card-img-top img-card" src="/images/foto-1.jpg" alt="Card image"/>
                        <div className="card-body">
                          <h4 className="card-title">John Doe</h4>
                          <h6 className="card-title">R$ 00,00</h6>
                          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                          <a href="#" className="btn btn-block text-white cor-secundaria">Adicionar ao carrinho</a>
                        </div>
                    </div>   
                </div>
            </div>
        </article>
    );
}

export default PacotesPrincipais;