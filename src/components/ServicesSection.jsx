import ServiceItem from "./ServiceItem";
import { serviceItems } from "../assets/constants";
import { Button } from "./Button";

const ServicesSection = () => {
  return (
    <section className="general-p-page-layout bg-[#F3F6FC] dark:bg-dark-color py-10 md:pt-16 pb-24">
      <div className="space-y-2">
        <h2 className="font-grotesque font-bold text-5xl">Nos Services</h2>
        <p className="font-grotesque text-3xl">
          Découvrez nos
          <br /> services de <span className="text-primary">nettoyage</span>
        </p>
      </div>
      <div className="mt-7 grid grid-cols-3 gap-7">
        {serviceItems.map((item) => (
          <ServiceItem
            key={item.title}
            highlighted={item.highlighted}
            description={item.description}
            title={item.title}
            serviceIcon={item.icon}
          />
        ))}
      </div>
      <div className="mt-12 grid place-items-center">
        <Button
          buttonText="Prenez un rendez-vous"
          link="/contact-us"
          additionalButtonStyles="bg-transparent text-primary"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
