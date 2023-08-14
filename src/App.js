import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/Navbar.js';
import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
