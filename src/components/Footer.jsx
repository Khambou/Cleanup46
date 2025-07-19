import { Button } from "./Button";
import { Link } from "react-router-dom";
import { listLinks, socialLinks, contactItems } from "../assets/constants";
import InformationCard from "./InformationCard";
import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/footer.css";
import Logo from "./Logo";

const LinkList = ({ list }) => {
  const { title, links } = list;

  return (
    <div className="link-wrapper">
      <h3 className="h3">{title}</h3>
      <ul className="link-wrapper-unordered">
        {links.map((link) => (
          <Link key={link.name} to={link.url}>
            <li className="body-text--normal link-text smooth-transition">
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
    <footer className="bg-primary dark:bg-dark-primary py-8 md:py-14">
      <div className="general-page-layout footer-items-container">
        <div className="flex flex-col gap-6 lg:w-[405px]">
          <Link to="/">
            {/*<img src={favicon} alt="CleanUp46" className="logo" />*/}
            <Logo />
          </Link>
          <p className="font-dm-sans font-medium text-base text-logo-grey dark:text-sky-blue-color">
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
                  className="block"
                  rel="noreferrer"
                >
                  <social.Icon className="text-2xl text-logo-grey dark:text-sky-blue-color" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="link-list">
          {listLinks.map((list) => (
            <LinkList list={list} key={list.name} />
          ))}
          <div className="flex flex-col gap-5 md:gap-7 lg:gap-12">
            <h3 className="h3">Rejoignez-nous</h3>
            <div className="flex flex-col gap-6">
              {contactItems.map((contact) => (
                <InformationCard
                  title={contact.text}
                  Icon={contact.icon}
                  key={contact.text}
                  titleStyle="font-dm-sans font-bold text-dark-color dark:text-secondary text-base"
                />
              ))}
            </div>
            <Button
              buttonText="Contactez-nous"
              rightIcon={<FaArrowRightLong className="text-2xl" />}
              additionalButtonStyles="border-[1px] border-solid border-dark-color dark:border-secondary smoth-transition hover:bg-white-color hover:border-white-color dark:bg-transparent"
              link="/contact-us"
              additionalButtonText="text-dark-color dark:text-secondary font-bold text-base font-dm-sans"
            />
          </div>
        </div>
      </div>
      <p className="body-text--normal font-grotesque font-bold mt-7 text-center cursor-pointer text-logo-grey dark:text-white-color">
        Copyright @ 2024 Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
