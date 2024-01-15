export const ListItem = ({ item, onDeleteItems, onToggleItems }) => {
  return (
    <li className="items">
      <input
        type="checkbox"
        className="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItems(item.id)} className="btn-delete">
        ❌
      </button>
    </li>
  );
};
