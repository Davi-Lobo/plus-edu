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

    useEffect(() => {
        api.get(`questions/${question_id}`)
        .then(response =>{
            setQuestion(response.data);
            setAnswers(response.data.answers);
            console.log(response.data.answers);
        })
    }, []);

    useEffect(() => {
        async function fetchUserData() {
            setAnswers(await Promise.all(answers.map(async (answer) => {
                const user = await api.get('users/'+ answer.id);
                answer.fullName = `${user.data.firstName} ${user.data.lastName}`;
                return answer;
            })));
        }

        fetchUserData();
    }, []);


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
                    <div className="questions-list -recent">
                        <div className="head">
                            <h2 className="title">Respostas</h2>

                            {/* <a href="/pergunte" className="link">Faça uma pergunta</a> */}
                        </div>
                        
                        <ul className="list">
                            {!answers.length 
                            ?
                                <h1>Ainda não há respostas</h1>
                            : 
                                answers.map(answer => (
                                    <li key = {answer.id} className="question-item">
                                        <div className="tags">
                                            <span>{answer.description}</span>
                                        </div>

                                        <div className="author">
                                            <span>Feita por: </span>
                                            <span className="name">{answer.fullName}</span>
                                        </div>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}
