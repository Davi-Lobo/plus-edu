import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';


export default function YourQuestions() {    
    const [ questions, setQuestions] = useState([]);
    const [ userQuestions, setUserQuestions] = useState([]);

    const userName = localStorage.getItem('username');
    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        api.get('questions').then(response =>{
            setQuestions(response.data);
        })
    }, []);

    useEffect(() => {
        const filteredQuestions = questions.filter(question => question.users_permissions_user.id == userId);
        setUserQuestions(filteredQuestions);
    }, [questions]);


    return (
        <div className="questions-list -yours">
            <div className="head">
                <h2 className="title">Suas Perguntas</h2> 

                <Link to="/ask" className="link">Faça uma pergunta</Link>
            </div>
            
            <ul className="list">
                {userQuestions.map(question => (
                    <li key={question.id} className="question-item">
                        <Link className="title" to={`/question/${question.id}`}>
                            <h3 className="title">{question.title}</h3>
                        </Link>

                        <div className="tags">
                            <span className="tag">{question.category}</span>
                        </div>

                        <div className="author">
                            <span>Feita por: </span>
                            <span className="name">{`${question.users_permissions_user.firstName} ${question.users_permissions_user.lastName}`}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}