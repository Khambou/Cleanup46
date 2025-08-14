import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { getDisplayClass, switchDarkLightMode } from "../utils/navbarUtils";
import Logo from "./Logo";

const NavLink = ({ active, linkTo, linkText, setShowMenu }) => (
  <li
    className={
      active ? "link-active smooth-transition" : "text-gray smooth-transition"
    }
    onClick={() => setShowMenu(false)}
  >
    <Link to={linkTo}>{linkText}</Link>
  </li>
);

function Navbar({ darkMode, setDarkMode }) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

    function toggleMenu() {
        if (showMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
    toggleMenu();
  }

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 1000) {
              setSideMenuActive(false);
              setShowMenu(false);
              toggleMenu();
          } else {
              setSideMenuActive(true);
          }
      };

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
      window.removeEventListener('resize', handleResize);
  }
  }, [sideMenuActive]);

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
  }, [showMenu]);

  // closeMenu(setShowMenu, showMenu);

  return (
    <div className="navbar-container">
      {/*<img src={favicon} className="logo" alt="logo" />*/}
      <Logo />
      <div className={`navbar ${getDisplayClass(window.innerWidth, showMenu)}`}>
        <ul id="menu" ref={menuRef}>
          {showMenu && (
            <div className="flex justify-end items-end mt-1">
              <button onClick={toggleShowMenu}>
                <RiCloseLargeLine className="menu-icon" />
              </button>
            </div>
          )}
          <NavLink
              linkTo="/"
              active={pathname === "/"}
              linkText="Accueil"
              setShowMenu={setShowMenu}
          />
          <NavLink
            linkTo="/tarifs"
            active={pathname === "/tarifs"}
            linkText="Nos tarifs"
            setShowMenu={setShowMenu}
          />
          <NavLink
            linkTo="/about-us"
            active={pathname === "/about-us"}
            linkText="À propos de nous"
            setShowMenu={setShowMenu}
          />
          <NavLink
            linkTo="/contact-us"
            active={pathname === "/contact-us"}
            linkText="Nous contacter"
            setShowMenu={setShowMenu}
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
            <RiMenu3Line className="menu-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
