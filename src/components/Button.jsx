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
  leftIconStyle = "",
  rightIconStyle = "",
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
      {leftIcon && (
        <img
          src={leftIcon}
          alt="Left Icon"
          width={24}
          height={24}
          className={`${leftIconStyle}`}
        />
      )}
      <p className={`button-text ${additionalButtonText}`}>{buttonText}</p>
      {rightIcon && (
        <img
          src={rightIcon}
          alt="Right Icon"
          width={24}
          height={24}
          className={`text-white-color ${rightIconStyle}`}
        />
      )}
    </button>
  );
};
