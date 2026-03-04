import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import RecipediaDemo from './pages/RecipediaDemo'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipedia" element={<RecipediaDemo />} />
      </Routes>
    </div>
  )
}

export default App
