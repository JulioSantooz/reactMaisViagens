import React from "react";
import './style.css';
//import Formulario from '../Cadastro/components/Formulario';
import Loader from '../../components/Loader';
//import TextLoader from '../../components/TextLoader';

import {lazy, Suspense} from 'react';

const Formulario = lazy(() => import('./components/Formulario'));

function Cadastro() {
    return(
        <div>
            <Suspense fallback={ <Loader/> }>
                <Formulario/>
            </Suspense>
        </div>
    );
}

export default Cadastro;