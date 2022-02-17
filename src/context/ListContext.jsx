import { createContext, useContext } from 'react';

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const value = {

  };
  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);

  if (!context) throw new Error('You must wrap your component with ListProvider to call useList');

  return context;
};

export default ListProvider;
