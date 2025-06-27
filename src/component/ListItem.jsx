import React, { useState } from 'react';

function ListItem() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div style={{ backgroundColor: "violet" }}>
        <hr />
        <h4 >Question 10</h4>
      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && <p>No items left.</p>}
      <br /><br /><br />
    </div>
  );
}

export default ListItem;
