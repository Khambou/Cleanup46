import React from "react";

const AboutUsElement = ({ title, description, right, bannerImage }) => {
  return (
    <div className="grid grid-cols-2 gap-[8.25rem]">
      <div className={`space-y-8 ${right ? "order-last" : ""}`}>
        <h2 className="font-grotesque font-bold text-5xl">{title}</h2>
        <p className="font-dm-sans text-lg">{description}</p>
      </div>
      <div className="h-60"></div>
    </div>
  );
};
export default AboutUsElement;
