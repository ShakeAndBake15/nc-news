import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SignInButton from './components/SignInButton';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <SignInButton />
        <Routes>
          <Route path='/' element={<Articles />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
