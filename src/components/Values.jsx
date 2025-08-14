import React from "react";
import { ourValues } from "../assets/constants";
import Value from "./Value";

const Values = () => {
  return (
    <section className="general-p-page-layout my-16 md:my-28 overflow-hidden">
      <h1 className="font-grotesque font-bold text-5xl md:text-7xl mb-7 md:mb-14 text-primary text-center md:text-left">
        Nos Valeurs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-7">
        {ourValues.map(({ valueName, valueDescription, valueIcon }) => (
          <Value
            key={valueName}
            valueName={valueName}
            valueDescription={valueDescription}
            valueIcon={valueIcon}
          />
        ))}
      </div>
    </section>
  );
};
export default Values;
