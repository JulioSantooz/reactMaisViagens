import React from "react";
import './style.css';

function Feedback() {
    return(
        <section className="container">
            <div className="row">
                <div className="col-12 text-center my-4">
                    <h1 className="display-4 text-white mt-4"><strong>Feedback</strong></h1>
                </div>
                <div className="col-12 d-flex justify-content-center text-center">
                    <div className=" col-sm-12 col-md-8 col-lg-6 text-white cor-secundaria">
                        <img className="mt-3 img-user-feedback" src="/images/usuario.png" alt=""/>
                        <h3>Usuário</h3>
                        <p>00/00/0000</p>
                        <p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Ipsam incidunt quod praesentium iusto id autem possimus 
                            assumenda at ut saepe.</strong></p>      
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center my-4">
                    <button type="button" class="btn btn-lg text-white mr-3 cor-secundaria" data-toggle="modal" data-target="#modalCriarFeedback">
                        Criar feedback
                    </button>
                    <a className="btn btn-lg text-white cor-secundaria" href="feedback.html">
                        Meus feedbacks
                    </a>
                    
                      {/*container do modal */}
                      <div className="modal" id="modalCriarFeedback">
                        <div className="modal-dialog">
                          <div className="modal-content">
                          
                            {/*cabecalho do modal */}
                            <div className="modal-header">
                              <h4 className="modal-title">Criar</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            {/*corpo do modal */}
                            <div className="modal-body">
                              <div className="container">
                                  <h2 className="text-center">Feedback</h2>
                                  <form action="/action_page.php" class="was-validated">
                                    <div className="form-group">
                                      <label for="uname">Descrição:</label>
                                      <textarea  className="form-control" name="" id="uname" cols="30" rows="5"  placeholder="Digite..." required></textarea>
                                      <div className="valid-feedback">Preenchimento Válido</div>
                                      <div className="invalid-feedback">Campo Obrigatório</div>
                                    </div>
                                    
                                      <div className="form-group">
                                      <label for="pwd">Data de criação:</label>
                                      <input type="date" class="form-control" id="pwd" placeholder="Digite a data" name="data" required/>
                                      <div className="valid-feedback">Válido</div>
                                      <div className="invalid-feedback">Por favor, preencha a senha</div>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-block my-4 text-white cor-secundaria">Criar</button>
                                  </form>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;