import Button from "./components/Button";

function App() {
  let buttonColor = "btn-secondary";
  return (
    <div>
      <Button buttonColor={buttonColor}>
        Press Button
      </Button>
    </div>
  );
}

export default App;
