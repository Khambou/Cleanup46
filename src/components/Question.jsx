import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

const Question = ({ question, response }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 bg-secondary dark:bg-text-primary rounded-2xl h-fit">
      <div className="flex items-center justify-between">
        <h3 className="font-grotesque font-medium text-lg md:text-xl lg:text-2xl text-text-primary dark:text-gray">
          {question}
        </h3>
        <button
          className="m-0 p-0 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FiMinusCircle className="text-lg md:text-2xl text-primary" />
          ) : (
            <BsPlusCircle className="text-lg md:text-2xl text-primary" />
          )}
        </button>
      </div>
      {open && (
        <p className="smooth-transition text-base md:text-lg lg:text-xl text-text-primary dark:text-gray mt-5">
          {response}
        </p>
      )}
    </div>
  );
};

export default Question;
