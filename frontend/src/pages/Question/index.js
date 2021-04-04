import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';

import './style.css';

const TITLE = "+Edu - Faça sua pergunta!";

export default function QuestionPage() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header/>

            <div className="page-title">
                <h1 className="title">Pergunta BLASJOSAIFASEJSAIOE ASIOEJSAE!?SAEPJSOE ??</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    
                </main>
            </div>
        </div>
    );
}
