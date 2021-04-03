import React from 'react';

export default function UserData() {    
    return (
        <div className="user-data">
            <div className="avatar">
                <img src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png" alt="User Profile Picture"/>
            </div>
            
            <div className="fields">
                <div className="field">
                    <span className="name">Davi Lobo</span>
                </div>
                <div className="field">
                    <span className="occupation">Bacharel em Computação - Desenvolvedor Web</span>
                </div>
                <div className="field">
                    <span className="email">davi.lobo.gs@gmail.com</span>
                </div>
            </div>
        </div>
    );
}