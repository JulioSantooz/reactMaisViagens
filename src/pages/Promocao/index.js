import React from 'react';
import './style.css';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
//import Pacotes from '../../components/Pacotes';
//import Titulo from '../../components/Titulo';
//import Sobre from '../../components/Sobre';
import Loader from '../../components/Loader';
//import TextLoader from '../../components/TextLoader';

import {lazy, Suspense} from 'react';

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));
const Titulo = lazy(() => import('../../components/Titulo'));
const Pacotes = lazy(() => import('../../components/Pacotes'));
const Sobre = lazy(() => import('../../components/Sobre'));

function Promocao() {
    return(
        <div>
            <Suspense fallback={ <Loader/> }> 
                <Header/>
                <Titulo titulo = "Promoções"/>
                <Sobre/>
                <Pacotes/>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default Promocao;