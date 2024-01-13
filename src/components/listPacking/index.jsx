// helpers
import { INITIAL_ITEMS } from "../../helpers/initialItems";
// components
import { ListItem } from "../listItem";
import "./style.css";

export const ListPacking = () => {
  return (
    <div className="wraper-list">
      <ul className="list-item-wrapper">
        {INITIAL_ITEMS?.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
