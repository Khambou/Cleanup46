import { useForm } from "react-hook-form";
import { fields } from "../assets/constants.js";
import { InputField } from "./InputField";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const submitHandler = (data) => {
    console.log("data", data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-8 lg:gap-y-14">
        {fields.map((field) => (
          <InputField
            field={field}
            key={field.name}
            register={register}
            errors={errors}
            setValue={setValue}
          />
        ))}
      </div>
      <div className="flex-layout--center mt-14 mb-10 lg:mb-28">
        <input
          type="submit"
          value="Soummettre"
          className="input-submit input-submit-btn"
        />
      </div>
    </form>
  );
};

export default ContactForm;
