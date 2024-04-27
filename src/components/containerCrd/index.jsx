import Card from "../card";

const Container = ({ state, handleData }) => {
  return (
    <>
      <div
        style={{ border: "2px solid black", width: "400px", margin: "20px" }}
      >
        {state.map((item) => {
          return <Card key={item.id} {...item} handleData={handleData} />;
        })}
      </div>
    </>
  );
};

export default Container;
