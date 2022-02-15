import { useReducer } from 'react';
import InputShoppingItem from '../components/InputShoppingItem';
import CartItems from '../components/ItemList/CartItems';

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
        },
      ];
    }
    case 'edit': {
      return items.map(item => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
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

  const handleEditItem = (task) => {
    dispatch({
      type: 'edit',
      task
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'delete',
      id: id
    });
  };

  return (
    <>
      <InputShoppingItem onAddItem={handleAddItem} />
      <CartItems items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
    </>
  );
}
