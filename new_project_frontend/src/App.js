import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Guest from './pages/Guest'
import Host from './pages/Host'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'
import './App.css'; 

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/host" element={<Host />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashBoard />} /> {/* Aggiungi la rotta per il Dashboard */}
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
