import React from "react";
import './style.css';

function Formulario() {
    return(
        <section class="d-flex justify-content-center align-items-center altura">
            <main class="form-signin col-11 col-sm-8 col-md-8 col-lg-6">
                <form className="text-white">
                    <h1 className="text-center my-4">Entrar em contato</h1>

                    <div class="form-floating mb-2">
                        <label for="floatingInput">Email</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    </div>
                    <div class="form-floating mb-2">
                        <label for="floatingPassword">Assunto</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Digíte..."/>
                    </div>
                    <div class="form-floating mb-2">
                        <label for="floatingPassword">Mensagem</label><br/>
                        <textarea rows="8" class="form-control" id="story" name="story" placeholder="Digíte..."></textarea>
                    </div>

                    <button class="w-100 btn btn-lg mt-5" type="submit">Enviar</button>
                    <p class="mt-4 mb-3 text-center text-white">© 2022</p>
                </form>
            </main>
        </section>
    );
}

export default Formulario;