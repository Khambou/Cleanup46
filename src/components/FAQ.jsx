import { faqQuestions } from "../assets/constants";
import Question from "./Question";
import { Button } from "./Button";
import { IoOpenOutline } from "react-icons/io5";

const FAQ = () => {
  return (
    <div className="general-page-layout py-20" id="faq">
      <h1 className="font-bold font-grotesque text-5xl text-center mb-16">
        Questions fréquemment posées
      </h1>
      <div className="grid gap-8 grid-cols-2">
        {faqQuestions.map((faqQuestion) => (
          <Question
            key={faqQuestion.question}
            question={faqQuestion.question}
            response={faqQuestion.response}
          />
        ))}
      </div>
      <div className="grid place-items-center mt-16">
        <Button
          rightIcon={<IoOpenOutline className="text-2xl" />}
          link="/contact-us"
          buttonText="Vous avez une question?"
          additionalButtonText="font-grotesque font-bold underline dark:text-white text-xl"
        />
      </div>
    </div>
  );
};

export default FAQ;
