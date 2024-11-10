import { PricingDescription } from "./CleaningCarsPricing";
import Tabs from "./Tabs";
import { Button } from "./Button";
import { ArrowRight } from "../assets/icons";

const CleaningHouseItems = () => {
  return (
    <section className="general-page-layout">
      <PricingDescription
        titleWidth=""
        titleText="Nettoyage canapé, matelas, tapis et moquettes"
        description="Découvrez notre service de nettoyage professionnel pour canapés, matelas, tapis, et moquettes !   À Cleanup, nous utilisons des techniques de nettoyage en profondeur et des produits respectueux de l'environnement pour éliminer les taches, la poussière, et les allergènes. Que ce soit pour rafraîchir un canapé, assainir un matelas, ou redonner de l'éclat à vos tapis et moquettes, nous vous garantissons des résultats impeccables et un intérieur plus sain."
        additionalStyle="gap-24"
      />
      <Tabs />
      <div className="flex-layout--center my-12">
        <Button
          rightIcon={ArrowRight}
          link="/contact-us"
          additionalButtonText="text-2xl"
          buttonText="Contactez-nous"
        />
      </div>
    </section>
  );
};

export default CleaningHouseItems;
