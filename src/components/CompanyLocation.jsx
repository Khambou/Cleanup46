import React from "react";

const CompanyLocation = () => {
  const mapQuery = "46140 Rte de la Séoune, France";
  const encodedQuery = encodeURIComponent(mapQuery);

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-x-20 items-center justify-center w-full general-p-page-layout h-screen overflow-hidden shadow-lg py-14 md:py-32 bg-secondary dark:bg-logo-grey">
      <div>
        <h3 className="font-grotesque font-bold text-2xl md:text-7xl text-text-primary dark:text-sky-blue-color">
          Bordeaux
        </h3>
        <p className="font-dm-sans text-lg md:text-xl text-text-primary dark:text-sky-blue-color my-2">
          Nous sommes présents 7/7 pour vous accompagner dans votre nettoyage
        </p>
      </div>
      <iframe
        title="Google Maps Location"
        className="rounded-xl"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=${encodedQuery}`}
      ></iframe>
    </div>
  );
};
export default CompanyLocation;
