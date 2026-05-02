import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import FindJobs from './pages/FindJobs.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/FindJobs" element={<FindJobs />} />
      </Routes>
    </div>
  );
}

export default App;