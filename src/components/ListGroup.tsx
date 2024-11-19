import { useState } from "react";

interface Prop{
  items: string[];
  heading: string

}

function ListGroup({items, heading}: Prop) {
  // Hook (function that allows to tap in react built in function)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index? "list-group-item active": "list-group-item"}
            onClick={() => setSelectedIndex(index)}
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
