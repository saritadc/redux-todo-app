import { ADD_TODO, SET_TODO_DATA } from "./action";

const initialState = {
  todos: []
}


const todoAppReducer = (state = initialState, action) =>  {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };

    case SET_TODO_DATA:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}

export default todoAppReducer;