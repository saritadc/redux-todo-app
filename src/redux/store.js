import { createStore } from 'redux';
import todoAppReducer from './reducer';


const store = createStore(
  todoAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;