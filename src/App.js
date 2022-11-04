import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

import Articles from './components/Articles';
import Header from './components/Header';
import NavBar from './components/NavBar'
import SearchArticles from './components/SearchArticle';
import ArticleByCatergory from './components/ArticleByCatergory';
import ArticleById from './components/ArticleById';
import { UserContext } from './context/UserContext';


function App() {

  const [user, setUser] = useState({
    username: 'grumpy19',
    name: 'Paul Grump',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013'
  })

  return (
  <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
    <header>
      <Header />
      <NavBar />
      <SearchArticles />
    </header>
    <main>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/:topic' element={<ArticleByCatergory />} />
          <Route path='/articles/:article_id' element={<ArticleById />} />
        </Routes>
    </main>
    </div>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;
