import React from 'react';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocao from './pages/Promocao';
import Contato from './pages/Contato';
import Administrador from './pages/Administrador';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import CadastroLogin from './pages/CadastroLogin'

function App() {

  const url = window.location.href;

  return (
    <div>
      {
        url === 'http://localhost:3000/Home' 
        ? <Home/>
        : url === 'http://localhost:3000/Destino' 
        ? <Destino/>
        : url === 'http://localhost:3000/Promocao' 
        ? <Promocao/>
        : url === 'http://localhost:3000/Contato' 
        ? <Contato/>
        : url === 'http://localhost:3000/Cadastro' 
        ? <Cadastro/>
        : url === 'http://localhost:3000/Login' 
        ? <Login/>
        : url === 'http://localhost:3000/CadastroLogin' 
        ? <CadastroLogin/>
        : url === 'http://localhost:3000/Administrador' 
        ? <Administrador/>
        : <Home/>
      }  
    </div>
  );
}

export default App;
