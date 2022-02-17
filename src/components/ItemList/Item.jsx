import React, { useState } from 'react';
import EditContent from './EditContent';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {item.text}
      <input
        type="checkbox"
        aria-label={`${item.text} input`}
        checked={item.done}
        onChange={(e) => {
          onEdit({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      <EditContent item={item} isEditing={isEditing} setIsEditing={setIsEditing} onEdit={onEdit} />
      <button aria-label="delete" type="button" onClick={() => onDelete(item.id)}>
        -
      </button>
    </>
  );
}
