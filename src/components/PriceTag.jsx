const PriceTag = ({ price, priceStyle }) => {
  return (
    <div className="flex-layout--end font-grotesque gap-[0.375rem]">
      <p className="text-2xl font-grotesque">A partir de</p>
      <p
        className={`text-5xl font-bold font-grotesque ${priceStyle ? priceStyle : "text-primary"}`}
      >
        {`${price}€`}
      </p>
    </div>
  );
};

export default PriceTag;
