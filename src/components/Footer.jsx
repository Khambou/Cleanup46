import favicon from "../assets/favicon.ico";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { listLinks, socialLinks, contactItems } from "../assets/constants";
import InformationCard from "./InformationCard";
import { ArrowRight } from "../assets/icons";
import { FaArrowRightLong } from "react-icons/fa6";

const LinkList = ({ list }) => {
  const { title, links } = list;

  return (
    <div className="flex flex-col gap-12 w-[237px]">
      <h3 className="h3">{title}</h3>
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <Link key={link.name} to={link.url}>
            <li className="body-text--normal font-semibold text-dark-color smooth-transition hover:text-secondary">
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary py-14">
      <div className="general-page-layout flex justify-between pb-16 border-b-2 border-b-secondary">
        <div className="flex flex-col gap-6 w-[405px]">
          <div>
            <img src={favicon} alt="CleanUp46" className="logo" />
          </div>
          <p className="font-dm-sans font-medium text-base">
            Nous sommes une équipe de passionnés dont le but est d'améliorer la
            vie de chacun grâce à des produits disruptifs. Nous fabriquons
            d'excellents produits pour résoudre vos problèmes commerciaux. Nos
            produits sont conçus pour les petites et moyennes entreprises
            désireuses d'optimiser leurs performances.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <div>
                <a
                  href={social.link}
                  target="_blank"
                  className="p-[10px] block rounded-xl border-[1px] border-solid border-dark-color"
                  rel="noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.link}
                    className="w-6 h-6"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        {listLinks.map((list) => (
          <LinkList list={list} key={list.name} />
        ))}
        <div className="flex flex-col gap-12">
          <h3 className="h3">Rejoignez-nous</h3>
          <div className="flex flex-col gap-6">
            {contactItems.map((contact) => (
              <InformationCard
                title={contact.text}
                icon={contact.icon}
                key={contact.text}
                titleStyle="font-dm-sans font-bold text-dark-color text-base"
              />
            ))}
          </div>
          <Button
            buttonText="Contactez-nous"
            rightIcon={<FaArrowRightLong className="text-2xl" />}
            additionalButtonStyles="border-[1px] border-solid border-dark-color smoth-transition hover:bg-white-color hover:border-white-color"
            link="/contact-us"
            additionalButtonText="text-dark-color font-bold text-base font-dm-sans"
          />
        </div>
      </div>
      <p className="body-text--normal font-grotesque font-bold mt-7 text-center cursor-pointer">
        Copyright @ 2024 Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
