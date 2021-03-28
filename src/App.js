import React from 'react';

import Header from './components/Header';

import './global.css'

function App() {
    return (
        <div className="App">
            <Header isLoggedIn={false}/>
        </div>
    );
}

export default App;
