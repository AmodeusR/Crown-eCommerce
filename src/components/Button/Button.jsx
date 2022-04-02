import "./button.scss";

const Button = ({ title, className, color, ...options }) => {
  const style = { "--first-btn-color": color }
  return (
    <button style={style} className={`button ${className || ""}`} {...options}>
      {title}
    </button>
  );
};

export default Button;
