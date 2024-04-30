import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {NavBar} from './NavBar/NavBar.js';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Guest from './components/Guest';
import Host from './components/Host';

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
