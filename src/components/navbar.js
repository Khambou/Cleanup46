import '../styles/navbar.css';

function Navbar() {
  return (
    <div class="navbar">
      <img src="favicon.ico" class="logo" alt="logo" />
      <div class="navbar">
        <ul>
          <li><a href="/">ACCUEIL</a></li>
          <li><a href="tarifs">NOS TARIFS</a></li>
          <li><a href="#propos">À PROPOS DE NOUS</a></li>
          <li><a href="#contact">NOUS CONTACTER</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
