import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Madeira", "Manchester", "Madrid", "Turin", "Saudi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
