import React from 'react';

export default function Item({ item, onEdit, onDelete }) {

  return (
    <>
      <div>
        {item.text}
        <input type="checkbox" />
        
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
}
