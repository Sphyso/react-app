import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Madeira", "Manchester", "Madrid", "Turin", "Saudi"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
