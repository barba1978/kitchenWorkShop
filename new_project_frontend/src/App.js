import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Guest from './pages/Guest'
import Host from './pages/Host'
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
      </Routes>
    </>
  );
}

export default App;
