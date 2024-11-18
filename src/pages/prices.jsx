import { Button } from "../components/Button.jsx";
import "../styles/prices.css";
import { PricingHeaderImg, PricingMiddleImg } from "../assets/images";
import { CleaningCarsPricing } from "../components/CleaningCarsPricing";
import { BannerImage } from "../components/BannerImage";
import CleaningHouseItemsPricing from "../components/CleaningHouseItemsPricing";
import { FaArrowRightLong } from "react-icons/fa6";

function Prices() {
  return (
    <>
      <div className="general-page-layout hero-section-heading gap-5 md:gap-[0.625rem]">
        <h1 className="heading-big">
          Profitez d'un <span className="text-primary">nettoyage</span> de
          qualité dès aujourd'hui !
        </h1>
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-12 lg:gap-24">
          <h3 className="left-section-text">
            CLEAN UP se déplace à votre domicile pour assurer l'entretien de
            votre véhicule ! Nous assurons également l’entretien de votre
            canapé, moquette, tapis, ...etc
          </h3>
          <Button
            buttonText="Prenez un rendez-vous"
            rightIcon={
              <FaArrowRightLong className="text-2xl text-white-color" />
            }
            link="/contact-us"
            additionalButtonText="text-xl lg:text-2xl font-bold font-grotesque text-white-color"
            leftIconStyle="fill-white"
          />
        </div>
      </div>
      <BannerImage imageUrl={PricingHeaderImg} altText="Car Washing" />
      <CleaningCarsPricing />
      <BannerImage imageUrl={PricingMiddleImg} altText="Couch Cleaning" />
      <CleaningHouseItemsPricing />
    </>
  );
}

export default Prices;
