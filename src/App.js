import './App.css';
import ListProvider from './context/ListContext';
import Home from './views/Home';

function App() {
  return (
    <>
      <ListProvider>
        <Home />
      </ListProvider>
    </>
  );
}

export default App;
