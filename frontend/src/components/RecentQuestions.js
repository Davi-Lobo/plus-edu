import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

export default function RecentQuestions() {
    const [ questions, setQuestions] = useState([]);

    const userName = localStorage.getItem('username');

    useEffect(() => {
        api.get('question', {
            headers: {
                author: userName,
            }
        }).then(response =>{
            setQuestions(response.data);
        })
    }, [userName]);

    return (
        <div className="questions-list -recent">
            <div className="head">
                <h2 className="title">Perguntas Recentes</h2>

                {/* <a href="/pergunte" className="link">Faça uma pergunta</a> */}
            </div>
            
            <ul className="list">
                {questions.map(question => (
                    <li key={question.id} className="question-item">
                        <Link className="title" to={`/pergunta/${question.id}`}>
                            <h3 className="title">{question.title}</h3>
                        </Link>

                        <div className="tags">
                            <span className="tag">{question.category}</span>
                        </div>

                        <div className="author">
                            <span>Feita por: </span>
                            <span className="name">{question.author}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}