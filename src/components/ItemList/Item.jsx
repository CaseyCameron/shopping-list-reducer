import React, { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let editContent;

  if (isEditing) {
    editContent = (
      <>
        <input value={item.text} onChange={(e) => e.target.value} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    editContent = (
      <>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <div>
        {item.text}
        <input type="checkbox" />
        {editContent}
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
}
