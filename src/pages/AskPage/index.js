import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';

import './style.css';

const TITLE = "+Edu - Faça sua pergunta!";

export default function AskPage() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>


            <Header/>

            <div className="page-title">
                <h1 className="title">Faça sua pergunta</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <form className="form-container -ask">
                        <div className="field">
                            <label htmlFor="title" className="label -required">Título</label>
                            <input id="title" type="text" placeholder="Insira o título da pergunta" name="title" maxLength="100"/>
                        </div>

                        <div className="field">
                            <label htmlFor="category" className="label -required">Categoria</label>
                            <select name="category" id="category">
                                <option value="" selected>Escolha a categoria</option>
                                <option value="matematica">Matemática</option>
                                <option value="historia">História</option>
                                <option value="biologia">Biologia</option>
                                <option value="portugues">Português</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="question" className="label -required">Pergunta</label>
                            <textarea id="question" className="input" placeholder="Faça sua pergunta" name="question" maxLength="3000"/>
                        </div>

                        <div className="actions">
                            <button className="button" type="submit">Perguntar</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
