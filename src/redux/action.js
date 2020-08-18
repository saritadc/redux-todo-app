export const ADD_TODO = 'ADD_TODO'
// export const SET_TODO_DATA = "SET_TODO_DATA";


export const addTodo = (todo) => {
  return { 
    type: ADD_TODO, 
    payload: todo
  }
}

// export const listTodo = (todos) =>
// {
//   return { 
//     type: SET_TODO_DATA, 
//     payload: todos 
//   }
// }



