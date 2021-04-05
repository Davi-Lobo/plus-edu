import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';

import api from '../../services/api';

import './style.css';

const TITLE = "+Edu - Seu Perfil";

export default function ProfilePage(props) {
    const [ user, setUser] = useState([]);
    const userId = props.match.params.id;

    useEffect(() => {
        api.get(`users/${userId}`).then(response =>{
            setUser(response.data);
            console.log(response.data)
        })
    }, []);

    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header isLogged={true}/>

            <div className="page-title">
                <h1 className="title">Seu Perfil</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <div className="user-data">
                        <div className="avatar">
                            <img src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png" alt="User Profile Picture"/>
                        </div>
                        
                        <div className="fields">
                            <div className="field">
                                <span className="name">{`${user.firstName} ${user.lastName}`}</span>
                            </div>
                            <div className="field">
                                <span className="occupation">{user.occupation}</span>
                            </div>
                            <div className="field">
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
