import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Hospital App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><Link to="/criar-consulta">Marcar Consultas</Link></li>
        <li><a href="/medicos">Médicos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;