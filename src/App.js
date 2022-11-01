import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import NavBar from './components/NavBar'
import SearchArticles from './components/SearchArticle';
import ArticleByCatergory from './components/ArticleByCatergory';


function App() {

  return (
  <BrowserRouter>
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
        </Routes>
    </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
