import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Madeira", "Manchester", "Madrid", "Turin", "Saudi"];
  let selectedIndex = 0;
  const handleClick = (event: MouseEvent) => console.log(event);

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index? "list-group-item active": "list-group-item"}
            onClick={handleClick}
            key={item}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
