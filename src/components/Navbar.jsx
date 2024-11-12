import "../styles/navbar.css";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.ico";
import { useLocation } from "react-router-dom";

const NavLink = ({ active, linkTo, linkText }) => (
  <li
    className={
      active
        ? "link-active smooth-transition"
        : "text-dark-color smooth-transition"
    }
  >
    <Link to={linkTo}>{linkText}</Link>
  </li>
);

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="navbar-container">
      <img src={favicon} className="logo" alt="logo" />
      <div className="navbar">
        <ul>
          <NavLink linkTo="/" active={pathname === "/"} linkText="Accueil" />
          <NavLink
            linkTo="/tarifs"
            active={pathname === "/tarifs"}
            linkText="Nos tarifs"
          />
          <NavLink
            linkTo="/about-us"
            active={pathname === "/about-us"}
            linkText="À propos de nous"
          />
          <NavLink
            linkTo="/contact-us"
            active={pathname === "/contact-us"}
            linkText="Nous contacter"
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
