import { contactUsFormInfos } from "../assets/constants";
import InformationCard from "../components/InformationCard";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <section className="general-page-layout">
      <div className="flex-layout--start justify-between mb-12">
        <div className="flex flex-col items-start gap-5">
          <h1 className="h0 -tracking-[0.8px]">Nous contacter</h1>
          <p className="body-text--normal w-3/5">
            Contactez-nous pour tout ce qui concerne notre entreprise ou nos
            services. Nous ferons de notre mieux pour vous répondre dans les
            plus brefs délais.
          </p>
        </div>
        <div className="flex flex-col gap-[1.625rem] w-2/5">
          {contactUsFormInfos.map((info) => (
            <InformationCard
              title={info.title}
              icon={info.icon}
              titleStyle="body-text--normal text-text-primary"
            />
          ))}
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Page;
