import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { getDisplayClass, switchDarkLightMode } from "../utils/navbarUtils";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";

const NavLink = ({ active, linkTo, linkText }) => (
  <li
    className={
      active ? "link-active smooth-transition" : "text-gray smooth-transition"
    }
  >
    <Link to={linkTo}>{linkText}</Link>
  </li>
);

function Navbar({ darkMode, setDarkMode }) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const menuRef = useRef(null);
  const width = window.innerWidth;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    if (width > 1000) {
      setSideMenuActive(false);
    } else {
      setSideMenuActive(true);
    }
  }, [width]);

  useEffect(() => {
    const handleClickOutsideOfMenu = (e) => {
      if (!menuRef.current.contains(e.target) && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideOfMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfMenu);
    };
  });

  // closeMenu(setShowMenu, showMenu);

  return (
    <div className="navbar-container">
      {/*<img src={favicon} className="logo" alt="logo" />*/}
      <Logo />
      <div className={`navbar ${getDisplayClass(width, showMenu)}`}>
        <ul id="menu" ref={menuRef}>
          {showMenu && (
            <div className="flex justify-end items-end">
              <button onClick={toggleShowMenu}>
                <CgClose className="menu-icon" />
              </button>
            </div>
          )}
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
      <div className="flex-layout--center gap-4">
        <p>Theme</p>
        <button
          onClick={() => switchDarkLightMode({ setDarkMode })}
          className="darkMode-icon-wrapper"
        >
          {darkMode ? (
            <LuSun className="sun-icon" />
          ) : (
            <LuMoon className="sun-icon" />
          )}
        </button>
        {sideMenuActive && (
          <button onClick={toggleShowMenu}>
            <CiMenuFries className="menu-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
