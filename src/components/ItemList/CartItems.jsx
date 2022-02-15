import React from 'react';
import Item from './Item';

export default function CartItems({ items, onEdit, onDelete }) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} onEdit={onEdit} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
