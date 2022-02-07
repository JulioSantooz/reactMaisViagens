import React from "react";
import './style.css';

function Footer() {
    return(
        <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h2 class="logo"><a href="https://programadorviking.com.br/"> +Viagens </a></h2>
                    </div>
                    <div class="col-sm-2">
                        <h5>Links Rápidos</h5>
                        <ul>
                            <li><a href="http://localhost:3000/Home">Home</a></li>
                            <li><a href="http://localhost:3000/Destino">Destino</a></li>
                            <li><a href="http://localhost:3000/Promocao">Promoções</a></li>
                            <li><a href="http://localhost:3000/Contato">Contato</a></li>
                            <li><a href="http://localhost:3000/Cadastro">Cadastro</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Orientadores</h5>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/gabriel-sales-3093b0168/">Gabriel Sales</a></li>
                            <li><a href="https://recodepro.org.br/">Recode Pro</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Desenvolvedor</h5>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/julio-henrique-diaz-viana-dos-santos-209009201/">Julio Santos</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <div class="social-networks">
                            <a href="https://www.linkedin.com/in/julio-henrique-diaz-viana-dos-santos-209009201/" class="twitter"><i class="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/julio-henrique-diaz-viana-dos-santos-209009201/" class="facebook"><i class="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/juliosantooz/" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                        <a href="https://www.linkedin.com/in/julio-henrique-diaz-viana-dos-santos-209009201/">
                            <button type="button" class="btn btn-default">Contato</button>
                        </a>
                    </div>
                </div>
        </div>
        <div class="footer-copyright">
            <p>© 2022 Copyright - Julio Santos</p>
        </div>
    </footer>
    );
}

export default Footer;