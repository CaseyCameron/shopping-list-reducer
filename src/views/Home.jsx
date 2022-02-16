import { useReducer } from 'react';
import InputShoppingItem from '../components/InputShoppingItem';
import CartItems from '../components/ItemList/CartItems';
import { initialItems, itemsReducer } from '../utils/reducer-utils';

export default function Home() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (itemText) => {
    dispatch({
      type: 'add',
      itemText,
      id: items.length + 1,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'delete',
      id: id,
    });
  };

  return (
    <>
      <h1>Welcome to the Shopping List</h1>
      <InputShoppingItem onAddItem={handleAddItem} />
      <CartItems items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
    </>
  );
}
