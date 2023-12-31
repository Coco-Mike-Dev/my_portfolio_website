const Button = (text, color) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
Button.defaultProps = { color: "black", text: "add" };

export default Button;
