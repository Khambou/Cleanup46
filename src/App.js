import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar.jsx";
import HomePage from "./pages/home.jsx";
import PricesPage from "./pages/prices.jsx";
import AboutPage from "./pages/about-us.jsx";
import ContactPage from "./pages/contact-us.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tarifs" element={<PricesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
