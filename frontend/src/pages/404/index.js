import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';

const TITLE = "+Edu - Página não encontrada";

export default function NotFound() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header/>

            <div className="page-wrapper">
                <div className="page-title">
                    <h1 className="title">
                        Página não encontrada
                    </h1>
                </div>
            </div>
        </div>
    );
}
