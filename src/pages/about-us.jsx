import Headline from "../components/Headline";
import AboutUsElement from "../components/AboutUsElement";
import Values from "../components/Values";
import { PlaceHolderImg } from "../assets/images";

const Page = () => {
  return (
    <div>
      <Headline />
      <div className="general-p-page-layout space-y-4 md:space-y-10 mb-28">
        <AboutUsElement
          title="Qui sommes nous?"
          description="Cleanup46 est une entreprise spécialisée dans les services de nettoyage pour les particuliers et les entreprises. Nous avons su développer des méthodes efficaces et respectueuses de l’environnement pour redonner éclat et propreté à vos textiles, surfaces et véhicules..."
          bannerImage={PlaceHolderImg}
          right={true}
        />
        <AboutUsElement
          title="Notre Mission"
          description="Notre mission est simple : vous offrir un service de nettoyage de qualité supérieure qui dépasse vos attentes. Nous savons que chaque client est unique, c'est pourquoi nous proposons des solutions personnalisées adaptées à vos besoins spécifiques. Que vous souhaitiez un nettoyage en profondeur de votre voiture, un traitement anti-allergène pour votre matelas ou une remise à neuf de votre canapé, nous avons les compétences et l'équipement pour y parvenir."
          bannerImage={PlaceHolderImg}
          right={false}
        />
      </div>
      <Values />
    </div>
  );
};

export default Page;
