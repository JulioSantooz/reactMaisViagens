import React from 'react';
import './style.css';
//import Loader from '../../components/Loader';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
//import Formulario from './components/Formulario';
import Loader from '../../components/Loader';
//import TextLoader from '../../components/TextLoader';

import {lazy, Suspense} from 'react';

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));
const Formulario = lazy(() => import('./components/Formulario'));

function Contato() {
    return(
        <div>
            <Suspense fallback={ <Loader/> }> 
                <Header/>
                <Formulario/>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default Contato;