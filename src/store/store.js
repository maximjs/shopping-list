import { createStore, combineReducers } from 'redux';

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  CHANGE_ITEM: 'CHANGE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

// Action creators
export const addItem = (payload = {}) => ({
  type: actionTypes.ADD_ITEM,
  payload,
});

export const changeItem = (payload = {}) => ({
  type: actionTypes.CHANGE_ITEM,
  payload,
});

export const deleteItem = (payload = {}) => ({
  type: actionTypes.DELETE_ITEM,
  payload,
});

// Initial states
const initItemsState = [
  { id: 'first', name:  'first', price: 10 },
  { id: 'second', name:  'second', price: 20 },
  { id: 'third', name:  'third', price: 30 },
  { id: 'fourth', name:  'fourth', price: 5 },
];

// Items Reducer
const itemsReducer = function(state = initItemsState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [
        ...state,
        action.payload,
      ];
    case actionTypes.CHANGE_ITEM:
      const { id, name, price } = action.payload;
      const newState = [...state];
      const itemToChange = newState.find(el => el.id === id);
      itemToChange.name = name;
      itemToChange.price = price;
      return newState;
    case actionTypes.DELETE_ITEM:
      const idToDelete = action.payload;
      const filteredState = state.filter(el => el.id !== idToDelete);
      return filteredState;
    default:
      return state;
  }
}


const reducers = combineReducers({
  itemsState: itemsReducer,
});

const store = createStore(reducers);
export default store;
