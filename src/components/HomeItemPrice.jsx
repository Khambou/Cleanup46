import PriceTag from "./PriceTag";

const HomeItemPrice = ({ item }) => {
  const { title, image, description, price, priceStyle } = item;

  return (
    <div className="flex flex-col items-center md:items-start gap-2 md:gap-5 p-5 lg:p-6 rounded-3xl shadow-fade dark:bg-grey-blue-color">
      <div className="w-full h-[10rem] md:h-[12.5rem] rounded-xl">
        <img className="w-full h-full rounded-xl object-cover" src={image} alt={title} />
      </div>
      <h3 className="h2 text-center md:text-left">{title}</h3>
      <p className="body-text--normal">{description}</p>
      <PriceTag price={price} priceStyle={priceStyle} />
    </div>
  );
};

export default HomeItemPrice;
