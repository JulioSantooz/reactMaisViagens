import React from "react";
import './style.css';

function Login() {
    return(
        <section class="d-flex justify-content-center align-items-center altura">
            <main class="form-signin col-11 col-sm-8 col-md-6 col-lg-4 cor-secundaria">
                <form className="text-white">
                    <h1 className="text-center my-4">+Viagens</h1>
                    <h1 class="h3 mb-4 fw-normal">Login:</h1>

                    <div class="form-floating mb-2">
                        <label for="floatingInput">Email</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    </div>
                    <div class="form-floating mb-2">
                        <label for="floatingPassword">Senha</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>

                    <div class="checkbox mb-3">
                        <label className="mt-3">
                            <input type="checkbox" value="remember-me"/> Lembrar-me
                        </label>
                    </div>

                    <button class="w-100 btn btn-lg " type="submit">Login</button>
                    <div class="d-flex justify-content-between mt-4">
                        <a href="http://localhost:3000/CadastroLogin" class="text-white ml-1">Cadastrar</a>
                        <a href="http://localhost:3000/Home" class="text-white mr-2">voltar</a>
                    </div>
                    <p class="mt-4 mb-3 text-muted text-center">© 2022</p>
                </form>
            </main>
        </section>
    );
}

export default Login;