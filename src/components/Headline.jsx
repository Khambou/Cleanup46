import React from "react";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { AboutUsHeaderImg, RoundedRectangle } from "../assets/images";

const Headline = () => {
  return (
    <section className="general-p-page-layout my-28 md:grid md:grid-cols-2 gap-44">
      <div>
        <div className="space-y-[1.375rem]">
          <h1 className="font-bold font-grotesque text-4xl md:text-[5rem] leading-tight">
            A propos de <br />
            <span className="text-primary">Cleanup 46</span>
          </h1>
          <p>
            Bienvenue chez Cleanup46, votre partenaire de confiance pour tous
            vos besoins de nettoyage professionnel ! Que ce soit pour votre
            voiture, vos canapés, vos matelas ou vos tapis, nous mettons notre
            expertise à votre service pour offrir des résultats impeccables et
            un environnement plus sain
          </p>
        </div>
        <div className="mt-20">
          <Button
            buttonText="Nos tarifs"
            rightIcon={<FaArrowRightLong className="text-white-color" />}
            link="/tarifs"
          />
        </div>
      </div>
      <div className="pr-9 pb-8 relative flex justify-end">
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
