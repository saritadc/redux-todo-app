import { ADD_TODO } from "./action";

const initialState = {
  todos: []
}


const todoAppReducer = (state = initialState, action) =>  {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      console.log("a");
      return { ...state, todos: [...state.todos, action.todo] };

    // case SET_TODO_DATA:
    //   return { ...state, todos: [...state.todos, action.todo] };

    default:
      return state;
  }
}

export default todoAppReducer;