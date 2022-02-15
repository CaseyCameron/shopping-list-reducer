export function findById(array, id) {
  return array.filter(item => item.id = id);
}

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
