import { faqQuestions } from "../assets/constants";
import Question from "./Question";
import { Button } from "./Button";
import { IoOpenOutline } from "react-icons/io5";
import {useEffect, useState} from "react";

const FAQ = () => {
    const [questionsDisplayed, setQuestionsDisplayed] = useState(faqQuestions?.slice(0, 2));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750)
                setQuestionsDisplayed(faqQuestions?.slice(0, 2));
            else
                setQuestionsDisplayed(faqQuestions);
        };

        // Run once on mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [faqQuestions]);

  return (
    <div className="general-page-layout py-10 md:py-20" id="faq">
      <h1 className="font-bold font-grotesque text-4xl md:text-5xl text-center mb-7 md:mb-16">
        Questions fréquemment posées
      </h1>
      <div className="grid gap-4 md:gap-8 md:grid-cols-2">
        {questionsDisplayed.map((faqQuestion) => (
          <Question
            key={faqQuestion.question}
            question={faqQuestion.question}
            response={faqQuestion.response}
          />
        ))}
          <button className="font-grotesque text-base md:hidden text-center underline" onClick={() => {
              if (questionsDisplayed.length <= 2)
                  setQuestionsDisplayed(faqQuestions);
              else
                  setQuestionsDisplayed(faqQuestions.slice(0, 2));
          }}>{questionsDisplayed?.length <= 2 ? "Afficher plus" : "Afficher moins"}
          </button>
      </div>
      <div className="grid place-items-center mt-7 md:mt-16">
        <Button
          rightIcon={<IoOpenOutline className="text-2xl" />}
          link="/contact-us"
          buttonText="Vous avez une question?"
          additionalButtonText="font-grotesque text-lg md:font-bold underline dark:text-white md:text-xl"
        />
      </div>
    </div>
  );
};

export default FAQ;
