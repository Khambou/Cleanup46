const InformationCard = ({ icon, title, description, titleStyle }) => {
  return (
    <div className="flex flex-col gap-6 cursor-pointer">
      <div className="flex items-center gap-3">
        <img src={icon} alt={title} width={24} height={24} />
        <h4
          className={`font-semibold text-[1.75rem] leading-normal font-grotesque text-text-primary ${titleStyle || ""}`}
        >
          {title}
        </h4>
      </div>
      {description && (
        <p className="body-text--normal font-grotesque text-text-primary">
          {description}
        </p>
      )}
    </div>
  );
};

export default InformationCard;
