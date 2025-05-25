import { Button } from "./Button";
import { IoCallOutline } from "react-icons/io5";

const ShowUp = () => {
  return (
    <div className="bg-primary dark:bg-dark-primary py-20">
      <h2 className="general-page-layout font-grotesque font-bold text-5xl dark:text-primary text-grey-blue-color">
        Votre confort est
        <br /> notre <span className="text-white-color">priorité</span>
      </h2>
      <div className="general-page-layout grid-cols-2 gap-6 h-[590px] mt-7">
        <div className="bg-red-color"></div>
        <div className="grid-cols-2 grid-rows-2 gap-6">
          <div className="bg-secondary"></div>
          <div className="bg-secondary"></div>
          <div className="bg-secondary"></div>
          <div className="bg-secondary"></div>
        </div>
      </div>
      <div className="grid place-items-center">
        <Button
          leftIcon={<IoCallOutline className="text-2xl" />}
          buttonText="Disponible au: 06 51 78 13 79"
          additionalButtonText="font-dm-sans font-bold text-xl text-dark-color"
          additionalButtonStyles="border-2 dark:border-dark-color text-dark-color smooth-transition hover:bg-white-color"
        />
      </div>
    </div>
  );
};

export default ShowUp;
