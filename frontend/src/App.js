import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import FindJobs from './pages/FindJobs.js';
import PostJob from './pages/PostJob.js';
import './styles/Roadmap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

        {/* PROTECTED ROUTES */}
  <Route 
    path="/FindJobs"
    element={
      <ProtectedRoute>
        <FindJobs />
      </ProtectedRoute>
    } 
  />
  <Route 
    path="/PostJob" 
    element={
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    } 
  />
        <Route path="/Register" element={<Register />} />
        <Route path="/FindJobs" element={<FindJobs />} />
        <Route path="/PostJob" element={<PostJob />} />
      </Routes>
    </div>
  );
}

export default App;