import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import FindJobs from './pages/FindJobs.js';
import PostJob from './pages/PostJob.js';
import Profile from './pages/Profile'; 
import About from './pages/About';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        {/* PROTECTED ROUTES */}
        <Route 
          path="/find-jobs"
          element={
            <ProtectedRoute>
              <FindJobs />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/post-job" 
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
