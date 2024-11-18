export const BannerImage = ({ imageUrl, altText }) => {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[31.625rem] mt-7 lg:mt-5">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
