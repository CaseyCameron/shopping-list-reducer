import React from 'react';
import { useList } from '../context/ListContext';
import './Header.css';

export default function Header() {
  const { items } = useList();

  return (
    <>
      <div className="heading">
        <h1>Shopping List</h1>
        <div className="items">Items: {items.length}</div>
      </div>
    </>
  );
}
