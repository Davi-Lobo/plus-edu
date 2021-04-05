import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import api from '../../services/api';
import './style.css';

const TITLE = "+Edu - Faça sua pergunta!";

export default function QuestionPage(props) {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState([]);
    const question_id = props.match.params.id;

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`questions/${question_id}`)
        .then(({ data }) =>{ 
            setQuestion(data);
            async function fetchUserData() {
                setAnswers(await Promise.all(data.answers.map(async (answer) => {
                    const user = await api.get('users/'+ answer.users_permissions_user);
                    answer.fullName = `${user.data.firstName} ${user.data.lastName}`;
                    return answer;
                })));
            }
    
            fetchUserData();
        })
    }, []);

    const [description, setDescription] = useState('');

    async function handleAnswer(e) {
        e.preventDefault();

        const data = {
            description,
            question: question_id
        }

        try {
            const response = await api.post('answers', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            window.location.reload();
        } catch {
            alert('Erro ao responder, tente novamente');
        }
    }

    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header/>
            <div className="page-title">
                <h1 className="title">{question.title}</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <div className="question-description">
                        <p className="description">{question.description}</p>
                        
                        <div className="author">
                            <span className="">Feita por: </span>
                            <span className="name">{`${question.users_permissions_user?.firstName} ${question.users_permissions_user?.lastName}`}</span>
                        </div>
                    </div>
                    
                    <div className="answers-list">
                        <div className="head">
                            <h2 className="title">Respostas</h2>    
                        </div>
                        
                        <ul className="list">
                            {!answers.length 
                            ?
                                <h1>Ainda não há respostas</h1>
                            : 
                                answers.map(answer => (
                                    <li key = {answer.id} className="item">
                                        <div className="answer">
                                            <p>{answer.description}</p>
                                        </div>

                                        <div className="author">
                                            <span>Feita por: </span>
                                            <span className="name">{answer.fullName}</span>
                                        </div>
                                    </li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={handleAnswer} className="form-container answer">
                        <div className="field">
                            <textarea 
                                name="answers" 
                                id="answers" 
                                maxLength="3000" 
                                placeholder="Escreva sua resposta"
                                onChange={e => setDescription(e.target.value)}
                            >
                            </textarea>
                        </div>

                        <div className="actions">
                            <button type="submit" className="button">Responder</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
