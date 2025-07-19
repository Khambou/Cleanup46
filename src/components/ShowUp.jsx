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
    <div className="bg-primary dark:bg-dark-primary py-20">
      <h2 className="general-page-layout font-grotesque font-bold text-5xl dark:text-dark-color text-grey-blue-color">
        Votre confort est
        <br /> notre <span className="text-white-color">priorité</span>
      </h2>
      <div className="grid general-p-page-layout grid-cols-2 gap-6 h-[590px] my-7 w-full">
        <div className="image-wrapper">
          <img src={ImageGallery1} alt="Man washing car" className="gallery" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {[ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5].map(
            (img, index) => (
              <div key={index} className="image-wrapper">
                <img
                  src={img}
                  alt={`Gallery image ${index + 2}`}
                  className="gallery"
                />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="grid place-items-center">
        <Button
          leftIcon={<IoCallOutline className="text-2xl" />}
          buttonText="Disponible au: 06 51 78 13 79"
          additionalButtonText="font-dm-sans font-bold text-xl text-dark-color dark:text-gray"
          additionalButtonStyles="border-2 dark:border-gray dark:text-gray text-dark-color smooth-transition hover:bg-white-color"
        />
      </div>
    </div>
  );
};

export default ShowUp;
