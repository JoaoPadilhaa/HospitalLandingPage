import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState (false);


  return (
    <nav className="navbar">
      <h1 className="logozinNav">Hos<span className="bluee">pital</span></h1>

      <div
      className={`hamburger ${menuOpen ? 'active':''}`}
      onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/criar-consulta" onClick={() => setMenuOpen(false)}>Marcar Consultas</Link></li>
        <li><Link to="/consultas" onClick={() => setMenuOpen(false)}>Consultas</Link></li>
        <li><a href="/medicos" onClick={() => setMenuOpen(false)}>Médicos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;