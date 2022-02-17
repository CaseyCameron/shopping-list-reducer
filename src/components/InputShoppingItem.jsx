import { useState } from 'react';

export default function InputShoppingItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    onAddItem(newItem);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Item"
          aria-label="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}

