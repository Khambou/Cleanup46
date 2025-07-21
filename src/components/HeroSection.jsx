import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { CleanIcon } from "../assets/icons";

const HeroSection = () => {
  return (
    <section className="py-32 grid place-items-center general-p-page-layout bg-hero-gradient bg-no-repeat bg-cover">
      <div className="text-center">
        <div className="grid place-items-center mb-10">
          <div className="clean-btn">
            <img src={CleanIcon} alt="Clean" className="shadow" />
            <p className="font-dm-sans text-lg text-white-color dark:text-dark-color">
              Clean+
            </p>
          </div>
        </div>
        <h1 className="font-bold text-8xl font-grotesque">
          Faites briller
          <br /> vos espaces de vie!
        </h1>
        <p className="text-lg font-dm-sans mt-8 pr-14 text-dark-color dark:text-gray">
          Notre équipe de nettoyage transforme chaque surface de l'intérieur de
          votre voiture <br /> à vos tapis et moquettes pour vous donner un
          environnement sain, propre et revitalisé.
        </p>
        <div className="mt-10 grid place-items-center">
          <Button
            link="/contact-us"
            rightIcon={<FaArrowRightLong className="text-white-color" />}
            buttonText="Contactez-nous"
          />
        </div>
      </div>
      {/*<div className="flex justify-end items-end">
        <img
          className="cleaning-car rounded"
          src="/img/cleaning-car.png"
          alt="cleaning"
        />
      </div>
      */}
    </section>
  );
};

export default HeroSection;
