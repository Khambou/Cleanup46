import "../styles/navbar.css";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.ico";

function Navbar() {
  return (
    <div className="navbar">
      <img src={favicon} className="logo" alt="logo" />
      <div className="navbar">
        <ul>
          <li className="font-dm-sans">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/tarifs">NOS TARIFS</Link>
          </li>
          <li>
            <Link to="/about-us">À PROPOS DE NOUS</Link>
          </li>
          <li>
            <Link to="/contact-us">NOUS CONTACTER</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
