export const switchDarkLightMode = ({ setDarkMode }) => {
  setDarkMode((prev) => !prev);

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme-cleanup", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme-cleanup", "dark");
  }
};

export const getDisplayClass = (width, showMenu) => {
  if (width > 1024) {
    return "block";
  } else if (showMenu) {
    return "navbar--show";
  }
  return "hidden";
};

export const closeMenu = (setShowMenu, showMenu) => {
  const menu = document.getElementById("menu");

  document.addEventListener("click", (event) => {
    if (menu && !menu.contains(event.target) && showMenu) {
      setShowMenu(false);
    }
  });
};
