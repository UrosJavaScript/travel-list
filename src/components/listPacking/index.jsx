// components
import { ListItem } from "../listItem";
import "./style.css";

export const ListPacking = ({ items, onDeleteItems, onToggleItems }) => {
  return (
    <div className="wraper-list">
      <ul className="list-item-wrapper">
        {items?.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
};
