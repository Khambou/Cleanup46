import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

const Question = ({ question, response }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 bg-secondary rounded-2xl h-fit">
      <div className="flex items-center justify-between">
        <h3 className="font-grotesque font-medium text-2xl text-text-primary">
          {question}
        </h3>
        <button
          className="m-0 p-0 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FiMinusCircle className="text-2xl text-primary" />
          ) : (
            <BsPlusCircle className="text-2xl text-primary" />
          )}
        </button>
      </div>
      {open && (
        <p className="smooth-transition text-xl text-text-primary mt-5">
          {response}
        </p>
      )}
    </div>
  );
};

export default Question;
