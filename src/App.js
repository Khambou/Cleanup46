import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar.jsx";
import HomePage from "./pages/home.jsx";
import PricesPage from "./pages/prices.jsx";
import AboutPage from "./pages/about-us.jsx";
import ContactPage from "./pages/contact-us.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  //when the page load check if the user's system theme preference is set to dark. If so switch to dark mode. In the other case allow the user to set the dark mode manually.
  useEffect(() => {
    const userTheme = localStorage.getItem("theme-cleanup");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("scrollbar");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("scrollbar");
    }
  }, []);
  return (
    <div className="font-dm-sans relative">
      <BrowserRouter>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToHashElement />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/tarifs" element={<PricesPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
