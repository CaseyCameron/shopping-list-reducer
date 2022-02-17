import InputShoppingItem from '../components/InputShoppingItem';
import CartItems from '../components/ItemList/CartItems';
import { useList } from '../context/ListContext';
import './Home.css';

export default function Home() {
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useList();

  return (
    <div className="home-body">
      <h1>Welcome to the Shopping List</h1>
      <InputShoppingItem onAddItem={handleAddItem} />
      <CartItems items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
    </div>
  );
}
