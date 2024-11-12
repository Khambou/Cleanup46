import { useNavigate } from "react-router-dom";
import "../styles/button.css";

export const Button = ({
  leftIcon,
  rightIcon,
  link,
  buttonText,
  customAction,
  additionalButtonStyles = "",
  additionalButtonText = "",
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={
        customAction
          ? customAction
          : () => {
              if (link) {
                navigate(link);
              }
            }
      }
      className={`button-style ${additionalButtonStyles}`}
    >
      {leftIcon && leftIcon}
      {buttonText && (
        <p
          className={
            additionalButtonText ? additionalButtonText : "button-text"
          }
        >
          {buttonText}
        </p>
      )}
      {rightIcon && rightIcon}
    </button>
  );
};
