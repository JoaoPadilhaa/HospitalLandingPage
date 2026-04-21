import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globalstyles.css"
import App from './App.tsx'
import Home from './pages/Home/home.tsx'
import Navbar from './components/Navbar/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-consulta" element={<App />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
