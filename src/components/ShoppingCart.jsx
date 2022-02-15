import { useState } from 'react';

export default function ShoppingCart() {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Button clicked');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
          type="submit"
        >
          Add Item
        </button>
      </form>
    </>
  );
}
