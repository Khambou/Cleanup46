import { contactUsFormInfos } from "../assets/constants";
import InformationCard from "../components/InformationCard";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <section className="general-page-layout">
      <div className="grid md:grid-cols-5 md:justify-between gap-y-8 md:gap-14 mb-8 lg:mb-12">
        <div className="space-y-5 md:col-span-2">
          <h1 className="h0 -tracking-[0.8px] lg:leading-[66px] layout-text w-full">
            Nous contacter
          </h1>
          <p className="body-text--normal hidden lg:block">
            Contactez-nous pour tout ce qui concerne notre entreprise ou nos
            services. Nous ferons de notre mieux pour vous répondre dans les
            plus brefs délais.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:gap-[1.625rem] col-span-3 lg:col-start-4 lg:col-end-6">
          {contactUsFormInfos.map((info) => (
            <InformationCard
              title={info.title}
              Icon={info.icon}
              titleStyle="body-text--normal text-text-primary dark:text-secondary"
            />
          ))}
        </div>
      </div>
      <p className="body-text--normal lg:hidden my-6 layout-text">
        Contactez-nous pour tout ce qui concerne notre entreprise ou nos
        services. Nous ferons de notre mieux pour vous répondre dans les plus
        brefs délais.
      </p>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Page;
