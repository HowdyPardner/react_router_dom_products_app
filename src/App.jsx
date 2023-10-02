import { useState } from 'react'
import './App.css'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  )
}

export default App
