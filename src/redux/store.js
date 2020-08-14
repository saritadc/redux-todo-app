import { createStore } from 'redux';
import todoAppReducer from './reducer';

const store =  createStore(todoAppReducer());
  
export default store;