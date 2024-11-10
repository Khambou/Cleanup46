import { Button } from "../components/Button.jsx";
import { ArrowRight } from "../assets/icons";
import "../styles/prices.css";
import { PricingHeaderImg, PricingMiddleImg } from "../assets/images";
import { CleaningCarsPricing } from "../components/CleaningCarsPricing";
import { BannerImage } from "../components/BannerImage";
import CleaningHouseItemsPricing from "../components/CleaningHouseItemsPricing";

function Prices() {
  return (
    <>
      <div className="general-page-layout flex-layout--start gap-[0.625rem]">
        <h1 className="font-grotesque text-[5rem] font-bold -tracking-[1.6px] uppercase">
          Profitez d'un <span className="text-primary">nettoyage</span> de
          qualité dès aujourd'hui !
        </h1>
        <div className="flex flex-col gap-24">
          <h3 className="left-section-text">
            CLEAN UP se déplace à votre domicile pour assurer l'entretien de
            votre véhicule ! Nous assurons également l’entretien de votre
            canapé, moquette, tapis, ...etc
          </h3>
          <Button
            buttonText="Prenez un rendez-vous"
            rightIcon={ArrowRight}
            link="/contact-us"
            additionalButtonText="text-2xl"
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
