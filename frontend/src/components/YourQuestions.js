import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';


export default function YourQuestions() {    
    const [ questions, setQuestions] = useState([]);

    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: user_id,
            }
        }).then(response =>{
            setQuestions(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <div className="questions-list -yours">
            <div className="head">
                <h2 className="title">Suas Perguntas</h2>

                <a href="/pergunte" className="link">Faça uma pergunta</a>
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