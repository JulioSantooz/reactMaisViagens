import React from "react";
import './style.css';

function Formulario() {
    return(
        <div class="container">
            <form class="row g-3 mt-5 cor-secundaria">
                <div class="col-1 mt-3">
                    <a href="http://localhost:3000/Home" class="text-white">Voltar</a>
                </div>
                <div class="col-10 text-center my-4">
                    <h1 class="display-4 text-white">
                        <strong>Cadastro</strong>
                    </h1>
                </div>
                <div class="col-12 my-3">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Selecione uma imagem"/>
                </div>
                <div class="col-12 my-3">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Digíte o seu nome completo"/>
                </div>
                <div class="col-12 my-3">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="dd/mm/aaaa"/>
                </div>
                <div class="col-md-4 my-4 text-white">
                    <label for="inputState" class="form-label">Selecione o seu sexo</label>
                    <select class="custom-select form-select"  id="inputState">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-4 my-4 text-white">
                    <label for="inputState" class="form-label">Selecione a sua cidade</label>
                    <select class="custom-select form-select" id="inputState">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-4 my-4 text-white">
                    <label for="inputState" class="form-label">Selecione o seu estado</label>
                    <select class="custom-select form-select" id="inputState">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-12 my-2">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Digíte o seu CEP"/>
                </div>
                <div class="col-12 my-4">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Digíte o seu Logradouro"/>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-lg btn-link mb-4 text-white">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;