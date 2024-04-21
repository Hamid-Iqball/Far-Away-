export function Item({ obj, onDelete, ontoggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        onChange={() => {
          ontoggle(obj.id);
        }}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button onClick={() => onDelete(obj.id)}>❌</button>
    </li>
  );
}
