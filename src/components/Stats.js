export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        Start adding items to yours packing list <em>🚲 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : ` 🌈You have ${numItems} items on your list, and you have packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
