import "../styles/home.css";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ShowUp from "../components/ShowUp";
import FAQ from "../components/FAQ";

function HomePage() {
  return (
    <div className="home">
      <div className="">
        <HeroSection />
        <ServicesSection />
        <ShowUp />
        <FAQ />
      </div>
    </div>
  );
}

export default HomePage;
