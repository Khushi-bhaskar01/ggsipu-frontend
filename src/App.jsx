import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dean from './Pages/Dean';
import Footer from './Components/Footer';
import Faculty from './Pages/Faculty';
import Staff from './Pages/Staff';
import Placement from './Pages/Placements';
import Contact from './Pages/Contact';
import ViceChancellor from './Pages/Vice';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="dean" element={<Dean />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="staff" element={<Staff />} />
        <Route path="placement" element={<Placement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="vice" element={<ViceChancellor />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
