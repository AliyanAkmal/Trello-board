const Button = ({ names, handleClick }) => {
  return (
    <button style={{ padding: "6px 10px" }} onClick={handleClick}>
      {names}
    </button>
  );
};

export default Button;
