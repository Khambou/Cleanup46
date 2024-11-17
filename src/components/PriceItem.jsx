import PriceTag from "./PriceTag";
import { FaCheck } from "react-icons/fa";

const PriceItem = ({ priceItem, index }) => {
  const { title, price, benefits, priceStyle, bgColor } = priceItem;
  let span = "";

  if (index === 0) span = "md:col-span-2";
  else if (index === 1) span = "md:col-span-3";
  else if (index === 2) span = "md:col-span-5";

  return (
    <div
      className={`py-8 px-6 lg:p-8 flex flex-col gap-8 lg:gap-12 rounded-3xl shadow-drop lg:h-fit dark:bg-grey-blue-color ${bgColor ? bgColor : ""} ${span} lg:col-span-1`}
    >
      <div className="flex-layout--center flex-col gap-5 lg:gap-8">
        <h3 className="text-h2">{title}</h3>
        <PriceTag price={price} priceStyle={priceStyle} />
      </div>
      <div
        className={`${index === 2 ? "flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col" : "flex flex-col"} items-start gap-3`}
      >
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-5">
            <div className="p-[6px] rounded-full bg-sky-blue-color">
              <FaCheck className="text-primary text-xs" />
            </div>
            <p className="text-base font-dm-sans">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceItem;
