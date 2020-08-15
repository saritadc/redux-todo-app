export const ADD_TODO = 'ADD_TODO'
export const SET_TODO_DATA = "SET_TODO_DATA";


export const addTodo = (text) => {
  return { 
    type: ADD_TODO, 
    payload: text
  }
}

export const setTodoData = (todos) =>
{
  return { 
    type: SET_TODO_DATA, 
    payload: todos 
  }
}



