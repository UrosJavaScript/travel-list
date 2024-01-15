import { useState } from "react";
// components
import { ListItem } from "../listItem";
// styles
import "./style.css";

export const ListPacking = ({ items, onDeleteItems, onToggleItems, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }



  return (
    <div className="wrapper-list">
      <ul className="list-item-wrapper">
        {sortedItems?.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Select by input order</option>
          <option value="description">Select by description order</option>
          <option value="packed">Select by packed order</option>
        </select>
        <button className="btn-clear" onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
};
