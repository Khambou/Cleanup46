import React from "react";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { AboutUsHeaderImg, RoundedRectangle } from "../assets/images";

const Headline = () => {
  return (
    <section className="general-p-page-layout mt-10 mb-28 md:my-28 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-44">
      <div>
        <div className="space-y-4 md:space-y-[1.375rem]">
          <h1 className="font-bold font-grotesque text-5xl text-center lg:text-left md:text-7xl lg:text-[5rem] leading-tight">
            A propos de <br />
            <span className="text-primary">Cleanup 46</span>
          </h1>
          <p className="text-center lg:text-left">
            Bienvenue chez Cleanup46, votre partenaire de confiance pour tous
            vos besoins de nettoyage professionnel ! Que ce soit pour votre
            voiture, vos canapés, vos matelas ou vos tapis, nous mettons notre
            expertise à votre service pour offrir des résultats impeccables et
            un environnement plus sain
          </p>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center lg:justify-start">
          <Button
            buttonText="Nos tarifs"
            rightIcon={<FaArrowRightLong className="text-white-color" />}
            link="/tarifs"
          />
        </div>
      </div>
      <div className="md:pr-9 pb-8 hidden relative lg:flex justify-end">
        <div className="w-[550px] h-[507px] relative z-10">
          <img
            src={AboutUsHeaderImg}
            alt="Our team"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </div>
        <img
          src={RoundedRectangle}
          alt="Rounded rectangle"
          className="absolute bottom-0 right-0 -z-0"
        />
      </div>
    </section>
  );
};
export default Headline;
