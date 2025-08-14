import { PricingDescription } from "./CleaningCarsPricing";
import Tabs from "./Tabs";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const CleaningHouseItems = () => {
  return (
    <section className="general-page-layout" id="cleaning-house">
      <PricingDescription
        titleWidth=""
        titleText="Nettoyage canapé, matelas, tapis et moquettes"
        description="Découvrez notre service de nettoyage professionnel pour canapés, matelas, tapis, et moquettes !   À Cleanup, nous utilisons des techniques de nettoyage en profondeur et des produits respectueux de l'environnement pour éliminer les taches, la poussière, et les allergènes. Que ce soit pour rafraîchir un canapé, assainir un matelas, ou redonner de l'éclat à vos tapis et moquettes, nous vous garantissons des résultats impeccables et un intérieur plus sain."
        additionalStyle="gap-6 md:gap-24"
      />
      <Tabs />
      <div className="flex-layout--center my-12">
        <Button
          rightIcon={<FaArrowRightLong className="text-lg md:text-xl lg:text-2xl text-white-color" />}
          link="/contact-us"
          additionalButtonText="text-lg md:text-xl lg:text-2xl font-bold font-grotesque text-white-color"
          buttonText="Contactez-nous"
        />
      </div>
    </section>
  );
};

export default CleaningHouseItems;
