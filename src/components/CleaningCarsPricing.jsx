import PriceItem from "./PriceItem";
import { priceItems } from "../assets/constants";

export const PricingDescription = ({
  titleWidth,
  titleText,
  description,
  additionalStyle,
}) => {
  const lines = description.split("   ");

  console.log("line", lines);
  return (
    <div className={`flex-layout--start pt-16 pb-9 ${additionalStyle}`}>
      <h3
        className={`text-5xl font-bold font-grotesque uppercase ${titleWidth}`}
      >
        {titleText}
      </h3>
      <p className="body-text--normal grow-0">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export const CleaningCarsPricing = () => {
  return (
    <section className="general-page-layout">
      <PricingDescription
        titleWidth="w-[514px]"
        titleText="Nettoyage intérieur de véhicule"
        description="Pour des prestations de nettoyage spécifiques ou nécessitant beaucoup de travail, un devis devra être réalisé.   La prestation peut avoir lieu à votre domicile ou dans nos locaux situés à Sauzet (46140).   Nous pouvons également récupérer votre véhicule directement chez vous et vous le restituer une fois les prestations réalisées."
        additionalStyle="gap-12"
      />
      <div className="flex-layout--start gap-6 mb-[107px]">
        {priceItems.map((priceItem) => (
          <PriceItem priceItem={priceItem} key={priceItem.title} />
        ))}
      </div>
    </section>
  );
};
