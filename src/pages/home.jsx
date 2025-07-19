import "../styles/home.css";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ShowUp from "../components/ShowUp";
import FAQ from "../components/FAQ";
import CompanyLocation from "../components/CompanyLocation";

function HomePage() {
  return (
    <div className="home">
      <div className="">
        <HeroSection />
        <ServicesSection />
        <ShowUp />
        <FAQ />
        <CompanyLocation />
      </div>
    </div>
  );
}

export default HomePage;
