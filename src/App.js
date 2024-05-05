import React from 'react';
import './style/App.css';
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';
import MarketPage from './pages/Market/MarketPage';
import AboutPage from './pages/About/AboutPage';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/market' element={<MarketPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App