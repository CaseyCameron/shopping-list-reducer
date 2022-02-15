import React from 'react';

export default function EditContent({ isEditing, setIsEditing, item, onEdit }) {
  return (
    <>
      {isEditing && (
        <>
          <input
            value={item.text}
            onChange={(e) => {
              onEdit({ ...item, text: e.target.value });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      )}
      {!isEditing && (
        <>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </>
  );
}
