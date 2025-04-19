import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Resume from './pages/resume';
import About from './pages/about';
import Navbar from './components/Navbar';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
