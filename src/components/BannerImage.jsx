export const BannerImage = ({ imageUrl, altText }) => {
  return (
    <div className="h-[31.625rem] mt-5">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
