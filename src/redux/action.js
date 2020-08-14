export const ADD_TODO = 'ADD_TODO'
export const LIST_TODO = 'LIST_TODO'


export const addTodo = (text) => {
  return { 
    type: ADD_TODO, text
  }
}

export const listTodo = (text) =>
{
  return { 
    type: LIST_TODO, index }
}

