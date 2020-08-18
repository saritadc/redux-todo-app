import { ADD_TODO } from "./action";

const initialState = {
  todos: ['a']
}


const todoAppReducer = (state = initialState, action) =>  {
  console.log(action.todo)
  switch (action.type) {
    case ADD_TODO:
      console.log("a");
      return { ...state, todos: [...state.todos, action.todo] };

    default:
      return state;
  }
}

export default todoAppReducer;