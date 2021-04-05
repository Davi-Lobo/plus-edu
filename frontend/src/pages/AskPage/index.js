import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import api from '../../services/api';

import './style.css';

const TITLE = "+Edu - Faça sua pergunta!";

export default function AskPage() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('token');

    async function handleAsk(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            category
        };

        try {
           const response = await api.post('questions', data, {
               headers: {
                   Authorization: `Bearer ${token}`,
               }
           });

           history.push('/dashboard');
        } catch (err) {
            alert('Erro ao perguntar, tente novamente')
        }
    }

    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>


            <Header isLogged={true}/>

            <div className="page-title">
                <h1 className="title">Faça sua pergunta</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <form onSubmit={handleAsk} className="form-container -ask">
                        <div className="field">
                            <label htmlFor="title" className="label -required">Título</label>
                            <input 
                                id="title" 
                                type="text" 
                                name="title" 
                                maxLength="100"
                                placeholder="Insira o título da pergunta"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="category" className="label -required">Categoria</label>
                            <select 
                                name="category" 
                                id="category"
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="" selected>Escolha a categoria</option>
                                <option value="Matemática">Matemática</option>
                                <option value="História">História</option>
                                <option value="Biologia">Biologia</option>
                                <option value="Português">Português</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="description" className="label -required">Pergunta</label>
                            <textarea 
                                id="description" 
                                className="input" 
                                placeholder="Faça sua pergunta" 
                                name="description" 
                                maxLength="3000"
                                onChange={e => setDescription(e.target.value)}
                            />
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
