import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Administrador() {
    return(
        <div>
            <Header/>
            <h1 className='teste'>Olá, eu sou a página Administrador :)</h1>
            <button className='btn btn-danger'>Teste bootstrap</button>
            <Footer/>
        </div>
    );
}

export default Administrador;