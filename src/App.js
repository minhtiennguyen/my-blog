import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <div id='page-body'>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/articles-list' exact component={ArticlesList} />
          <Route path='/article' exact component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
