import PriceItem from "./PriceItem";
import { priceItems } from "../assets/constants";

export const CleaningCarsPricing = () => {
  return (
    <>
      <div className="flex-layout--start general-page-layout pt-16 pb-9 gap-12">
        <h3 className="text-5xl font-bold font-grotesque uppercase w-[514px]">
          NETTOYAGE INTERIEUR DE VEHICULE
        </h3>
        <p className="body-text--normal">
          Pour des prestations de nettoyage spécifiques ou nécessitant beaucoup
          de travail, un devis devra être réalisé. <br />
          La prestation peut avoir lieu à votre domicile ou dans nos locaux
          situés à Sauzet (46140). <br />
          Nous pouvons également récupérer votre véhicule directement chez vous
          et vous le restituer une fois les prestations réalisées.
        </p>
      </div>
      <div className="flex-layout--start gap-6 mb-[107px]">
        {priceItems.map((priceItem) => (
          <PriceItem priceItem={priceItem} key={priceItem.title} />
        ))}
      </div>
    </>
  );
};
