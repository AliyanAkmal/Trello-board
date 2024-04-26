import Card from "../card";

const Container = ({ state, handleData }) => {
  return (
    <>
      <div
        style={{ border: "2px solid black", width: "400px", margin: "20px" }}
      >
        {state.map((item, index) => {
          return <Card key={index} {...item} handleData={handleData} />;
        })}
      </div>
    </>
  );
};

export default Container;
