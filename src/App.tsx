import Button from "./components/Button";

function App() {
  let buttonColor = "btn-secondary";
  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Press Button
      </Button>
    </div>
  );
}

export default App;
