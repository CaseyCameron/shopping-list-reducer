import React from 'react';

export default function Item({ item, onDelete }) {
  return (
    <>
      <div>
        {item.text}
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
}
