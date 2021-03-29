import React from 'react';

import Header from './components/Header';
import RecentQuestions from './components/RecentQuestions';
import SearchQuestions from './components/SearchQuestion';
import TopTags from './components/TopTags';

import './global.css'

function App() {
    return (
        <div className="App">
            <Header isLoggedIn={false}/>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <RecentQuestions/>
                </main>

                <aside className="sidebar-main">
                    <div className="content">
                        <SearchQuestions/>
                        <TopTags/>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default App;
