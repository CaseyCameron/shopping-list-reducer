import React from 'react';
import Item from './Item';

export default function CartItems({ items, onDelete }) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
