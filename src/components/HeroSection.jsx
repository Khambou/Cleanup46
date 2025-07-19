import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="mt-16 grid justify-between gap-20 general-page-layout grid-cols-2 mb-20">
      <div>
        <h1 className="font-bold text-8xl font-grotesque">
          Faites briller
          <br /> vos espaces de vie!
        </h1>
        <p className="text-lg font-dm-sans mt-8 pr-14 text-dark-color dark:text-gray">
          Notre équipe de nettoyage transforme chaque surface de l'intérieur de
          <br />
          votre voiture à vos tapis et moquettes pour vous donner un
          <br />
          environnement sain, propre et revitalisé.
        </p>
        <div className="mt-10">
          <Button
            link="/contact-us"
            rightIcon={<FaArrowRightLong />}
            buttonText="Contactez-nous"
          />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <img
          className="cleaning-car rounded"
          src="/img/cleaning-car.png"
          alt="cleaning"
        />
      </div>
    </section>
  );
};

export default HeroSection;
