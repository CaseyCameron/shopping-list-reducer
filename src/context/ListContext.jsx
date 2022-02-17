import { createContext, useContext, useReducer } from 'react';

export const initialItems = [
  { id: 0, text: 'Meat', done: false },
  { id: 1, text: 'Potatoes', done: false },
  { id: 2, text: 'Broccoli', done: false },
];

export function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.itemText,
          done: false,
        },
      ];
    }
    case 'edit': {
      return items.map((item) => {
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

export const ListContext = createContext();

const ListProvider = ({ children }) => {
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

  const value = {
    items,
    handleAddItem,
    handleEditItem,
    handleDeleteItem,
  };
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export const useList = () => {
  const context = useContext(ListContext);

  if (!context) throw new Error('You must wrap your component with ListProvider to call useList');

  return context;
};

export default ListProvider;
