import "../styles/input.css";

export const InputField = ({ field, register, errors, setValue }) => {
  const { name, placeholder, type, onChange, rules, label, inputStyle } = field;
  return (
    <div className="flex flex-col gap-5">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {rules?.required && <span className="text-red-color ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        className={`form-input ${inputStyle || ""}`}
        placeholder={placeholder}
        {...register(name, rules)}
        onChange={(value) => {
          if (onChange) {
            onChange(value, setValue);
          }
          console.log(value);
        }}
      />
      {errors[name] && (
        <p className="message--error smooth-transition -mt-3">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
