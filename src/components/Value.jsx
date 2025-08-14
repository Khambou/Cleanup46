import React from "react";

const Value = ({ valueName, valueDescription, valueIcon }) => {
  return (
    <div className="p-5 flex flex-col items-center md:items-start gap-7 bg-[#F0FBFF] dark:bg-grey-blue-color rounded-3xl shadow">
      <div className="p-5 rounded-full w-fit bg-white">
        <img src={valueIcon} alt={valueName} className="h-8" />
      </div>
      <div className="space-y-4 text-center md:text-left">
        <h3 className="font-grotesque font-bold text-2xl md:text-3xl">
          {valueName}
        </h3>
        <p className="font-dm-sans text-lg text-text-primary dark:text-[#F0FBFF]">
          {valueDescription}
        </p>
      </div>
    </div>
  );
};
export default Value;
