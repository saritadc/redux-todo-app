import { ADD_TODO, LIST_TODO } from './action'

const initialState = {
  todos: []
}


export const todoAppReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}

    case LIST_TODO:
      return {...state, number: action.payload}

    default:
      return state;
  }
}