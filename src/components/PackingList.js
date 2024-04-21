import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDelete, onToggle, onReset }) {
  //states
  const [sortBy, setSortBy] = useState("input");
  //JS logic
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === " packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        ,
        {sortedItems.map((item) => (
          <Item obj={item} onDelete={onDelete} ontoggle={onToggle} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by Description</option>
          <option value=" packed">Sort by packed status</option>
        </select>
        <button onClick={onReset}>Clear List</button>
      </div>
    </div>
  );
}
