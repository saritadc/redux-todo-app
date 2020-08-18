import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-dom'
import routes from '../../constants/routes';

class ListItems extends React.Component {

  render(){
    const todos = this.props.todos;
    console.log(todos, "abc")
  return(
  <div>
    <h2>Todo List</h2>
    <p>
    {
      todos.map(todo => <div>{todo}</div>)
    }
    </p>
    <p>Hello</p>
    <Link to={routes.ADD_TODO}>Return to add items</Link>
  </div>

   );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});


const listItems = connect(mapStateToProps)(ListItems);
export default listItems;