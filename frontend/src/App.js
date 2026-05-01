import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import './App.css';

const Home = () => <div className="page-container"><h1>🏠 Home Page</h1></div>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;