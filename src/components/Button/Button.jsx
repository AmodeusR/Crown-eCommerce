import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import "./button.scss";

const Button = ({ title, className, color, isLoading = false, ...options }) => {
  const style = { "--first-btn-color": color }
  return (
    <button style={style} disabled={isLoading} className={`button ${className || ""}`} {...options}>
      {isLoading ?
        <LoadingAnimation /> :
        title  
      }
    </button>
  );
};

export default Button;
