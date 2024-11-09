import '../styles/navbar.css';

function Navbar() {
  return (
    <>
      <div class="navbar-container">
      <img src={process.env.PUBLIC_URL + '/favicon.ico'} class="logo" alt="logo" />
      <div class="navbar">
        <ul>
          <li><a href="/accueil">ACCUEIL</a></li>
          <li><a href="/tarifs">NOS TARIFS</a></li>
          <li><a href="/propos">À PROPOS DE NOUS</a></li>
          <li><a href="/contact">NOUS CONTACTER</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar;
