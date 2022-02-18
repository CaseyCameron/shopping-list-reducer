import CartItems from '../components/ItemList/CartItems';
import Header from '../components/Header';
import InputShoppingItem from '../components/InputShoppingItem';
import { useList } from '../context/ListContext';
import './Home.css';

export default function Home() {
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useList();

  return (
    <div className="home-body">
      <Header />
      <InputShoppingItem onAddItem={handleAddItem} />
      <CartItems items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
    </div>
  );
}
