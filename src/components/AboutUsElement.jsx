import React from "react";

const AboutUsElement = ({ title, description, right, bannerImage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-[8.25rem]">
      <div className={`space-y-4 md:space-y-8 ${right ? "md:order-last" : ""}`}>
        <h2 className="font-grotesque text-center md:text-left font-bold text-5xl">{title}</h2>
        <p className="font-dm-sans text-lg text-center md:text-justify lg:text-left">{description}</p>
      </div>
      <div className="h-60">
          <img className="w-full h-full rounded-xl object-cover" src={bannerImage} alt={title} />
      </div>
    </div>
  );
};
export default AboutUsElement;
