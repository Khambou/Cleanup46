import PriceItem from "./PriceItem";
import { priceItems } from "../assets/constants";

export const PricingDescription = ({
  titleWidth,
  titleText,
  description,
  additionalStyle,
}) => {
  const lines = description.split("   ");

  return (
    <div
      className={`flex-layout--start flex-col md:flex-row pt-8 md:pt-16 pb-7 md:pb-9 ${additionalStyle}`}
    >
      <h3
        className={`text-4xl layout-text lg:text-5xl font-bold font-grotesque uppercase ${titleWidth}`}
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
    <section className="general-page-layout" id="cleaning-cars">
      <PricingDescription
        titleWidth="lg:w-[514px]"
        titleText="Nettoyage intérieur de véhicule"
        description="Pour des prestations de nettoyage spécifiques ou nécessitant beaucoup de travail, un devis devra être réalisé.   La prestation peut avoir lieu à votre domicile ou dans nos locaux situés à Sauzet (46140).   Nous pouvons également récupérer votre véhicule directement chez vous et vous le restituer une fois les prestations réalisées."
        additionalStyle="md:gap-12 gap-6"
      />
      <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-6 mb-10 md:mb-20 lg:mb-[107px]">
        {priceItems.map((priceItem, index) => (
          <PriceItem
            priceItem={priceItem}
            key={priceItem.title}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

// flex items-start justify-between lg:justify-center flex-wrap lg:flex-nowrap
