const InformationCard = ({ Icon, title, description, titleStyle }) => {
  return (
    <div className="flex flex-col gap-6 cursor-pointer">
      <div className="flex items-center gap-3">
        <Icon className="text-2xl dark:text-secondary" />
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
