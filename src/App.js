import './App.css'
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><NavBar /><Home /><Footer /></>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
            <Route path="/game" element={<><NavBar/><Game/></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
