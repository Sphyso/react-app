function ListGroup() {
  let items = ["Madeira", "Manchester", "Madrid", "Turin", "Saudi"];
  items = [];
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
