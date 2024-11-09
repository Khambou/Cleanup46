export const BannerImage = ({ imageUrl }) => {
  return (
    <div className="h-[31.625rem] mt-5">
      <img
        src={imageUrl}
        alt="Car Washing"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
