import PriceTag from "./PriceTag";
import { Check } from "../assets/icons";

const PriceItem = ({ priceItem }) => {
  const { title, price, benefits, priceStyle, bgColor } = priceItem;
  return (
    <div
      className={`p-8 flex-layout--center flex-col gap-12 rounded-3xl shadow-drop w-[25.5rem] ${bgColor ? bgColor : ""}`}
    >
      <div className="flex-layout--center flex-col gap-8">
        <h3 className="text-h2">{title}</h3>
        <PriceTag price={price} priceStyle={priceStyle} />
      </div>
      <div className="flex flex-col items-start gap-3">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex-layout--center gap-5">
            <div className="py-[5px] px-[4.38px] grow rounded-full bg-sky-blue-color">
              <img
                src={Check}
                alt="Check Icon"
                className="object-contain w-[10px] h-[7.98px]"
              />
            </div>
            <p className="text-base font-dm-sans">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceItem;
