const ServiceItem = ({ serviceIcon, title, description, highlighted }) => {
  return (
    <div
      className={`flex flex-col p-6 gap-y-16 animate-in duration-300 fade-in rounded-3xl ${!highlighted ? "bg-sky-blue-color dark:bg-text-primary text-text-primary dark:text-white-color" : "bg-green-color dark:bg-grey-green-color text-white-color"}`}
    >
      <div>
        <img src={serviceIcon} alt="Icon" width={60} height={60} />
      </div>
      <div className="space-y-6">
        <h3 className="font-grotesque font-bold text-[1.75rem] tracking-normal">
          {title}
        </h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
