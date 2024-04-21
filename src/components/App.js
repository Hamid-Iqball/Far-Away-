import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: false },
  { id: 2, description: "socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleReset() {
    alert("Are you sure you want to delete all the items");
    setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggleItem}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
