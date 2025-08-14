import { Button } from "./Button";
import { IoCallOutline } from "react-icons/io5";
import {
  ImageGallery1,
  ImageGallery2,
  ImageGallery3,
  ImageGallery4,
  ImageGallery5,
} from "../assets/images";

const ShowUp = () => {
  return (
    <div className="bg-primary dark:bg-text-primary py-10 md:py-20">
      <h2 className="general-page-layout font-grotesque font-bold text-4xl md:text-5xl dark:text-dark-color text-grey-blue-color">
        Votre confort est
        <br /> notre <span className="text-white-color">priorité</span>
      </h2>
      <div className="grid general-p-page-layout grid-cols-4 grid-rows-4 gap-4 md:gap-6 h-[70vh] lg:h-[590px] my-7 w-full">
        <div className="image-wrapper col-span-4 lg:col-span-2 row-span-2 lg:row-span-4">
          <img src={ImageGallery1} alt="Man washing car" className="gallery" />
        </div>
        {/*<div className="grid grid-cols-2 grid-rows-2 gap-6">*/}
          {[ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5].map(
            (img, index) => (
              <div key={index} className="image-wrapper col-span-2 lg:col-span-1 lg:row-span-2">
                <img
                  src={img}
                  alt={`Gallery image ${index + 2}`}
                  className="gallery"
                />
              </div>
            ),
          )}
        {/*</div>*/}
      </div>
      <div className="grid place-items-center">
        <Button
          leftIcon={<IoCallOutline className="text-2xl" />}
          buttonText="Disponible au: 06 51 78 13 79"
          additionalButtonText="font-dm-sans text-base md:text-xl text-dark-color dark:text-white"
          additionalButtonStyles="border-[1px] md:border-2 dark:border-white dark:text-white text-dark-color smooth-transition hover:bg-white-color"
        />
      </div>
    </div>
  );
};

export default ShowUp;
