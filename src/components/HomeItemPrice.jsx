import PriceTag from "./PriceTag";

const HomeItemPrice = ({ item }) => {
  const { title, image, description, price, priceStyle } = item;

  return (
    <div className="flex flex-col items-start gap-5 p-6 rounded-3xl shadow-fade w-full md:w-2/5 lg:w-[25.5rem]">
      <div className="w-full h-[12.5rem]">
        <img className="w-full h-full rounded-xl" src={image} alt={title} />
      </div>
      <h3 className="h2">{title}</h3>
      <p className="body-text--normal">{description}</p>
      <PriceTag price={price} priceStyle={priceStyle} />
    </div>
  );
};

export default HomeItemPrice;
