import React, { useState } from 'react';
import EditContent from './EditContent';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div>
        {item.text}
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => {
            onEdit({
              ...item,
              done: e.target.checked,
            });
          }}
        />
        <EditContent props={item, isEditing, setIsEditing, item, onEdit} />
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
}
