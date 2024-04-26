import Button from "../button/Button";

const Card = ({ title, description, handleData, id }) => {
  const handleSwitch = () => {
    handleData({ id: id, title: title, description: description });
  };
  return (
    <>
      <div
        style={{
          padding: "15px",
          border: "2px solid black",
          width: "200px",
          margin: "10px",
        }}
      >
        <div style={{ paddingBottom: "5px" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <Button handleClick={handleSwitch} names="next" />
        </div>
      </div>
    </>
  );
};

export default Card;
