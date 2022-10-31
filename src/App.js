import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import NavBar from './components/NavBar'

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <header>
      <Header />
      <NavBar />
    </header>
    <main>
        <Routes>
          <Route path='/' element={<Articles />} />
        </Routes>
    </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
