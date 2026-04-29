import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globalstyles.css"
import Home from './pages/Home/home.tsx'
import Navbar from './components/Navbar/navbar.tsx'
import Consultass from './pages/Consultas/consultas.tsx'
import CriarConsulta from './pages/CriarConsulta/criarconsulta.tsx'
import Medicos from './pages/Medicos/medicos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-consulta" element={<CriarConsulta />} />
        <Route path="/consultas" element={<Consultass />} />
        <Route path="/medicos" element={<Medicos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
