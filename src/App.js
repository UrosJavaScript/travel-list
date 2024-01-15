import { useState } from "react";
// components
import { Logo } from "./components/logo";
import { Form } from "./components/form";
import { ListPacking } from "./components/listPacking";
import { Stats } from "./components/stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    console.log("KLik DELETE");
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    console.log("Toggle: ", id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ListPacking
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
