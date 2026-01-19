import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🍳 Odin Recipes</h1>
        <p className="tagline">Delicious recipes for every occasion</p>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Odin Recipes. Made with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
