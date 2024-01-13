import React from "react";

export const ListItem = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      &nbsp;
      <button>❌</button>
    </li>
  );
};
