import React from 'react';
import './style.css';
import {lazy, Suspense} from 'react';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
//import Carousel from './components/Carousel';
//import Sobre from '../../components/Sobre';
//import Feedback from './components/Feedback';
//import Inicio from './components/Inicio';
import Loader from '../../components/Loader';
//import TextLoader from '../../components/TextLoader';

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));
const Carousel = lazy(() => import('./components/Carousel'));
const Sobre = lazy(() => import('../../components/Sobre'));
const Feedback = lazy(() => import('./components/Feedback'));
const Inicio = lazy(() => import('./components/Inicio'));



function Home() {
    return(
        <main>
            <Suspense fallback={<Loader/>}>
                <Header/>
                <Inicio/>
                <Sobre/>
                <Feedback/>
                <Carousel/>
                <Footer/>
            </Suspense>
        </main>
    );
}

export default Home;