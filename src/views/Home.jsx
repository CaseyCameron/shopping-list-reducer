import { useReducer } from 'react';
import InputShoppingItem from '../components/InputShoppingItem';
import ShoppingCart from '../components/ShoppingCart';

const initialItems = [
  { id: 0, text: 'Meat', done: false },
  { id: 1, text: 'Potatoes', done: false },
  { id: 2, text: 'Broccoli', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        }
      ];
    }
    case 'default': 
      throw Error(`Unknown action: ${action.type}`);
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'add',
      text,
      id: items.length + 1,
    });
  };
  
  return (
    <>
      <InputShoppingItem onAddItem={handleAddItem}/>
      <ShoppingCart />
    </>
  );
}
