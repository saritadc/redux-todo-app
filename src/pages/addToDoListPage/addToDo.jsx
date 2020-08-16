import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {addTodo} from '../../redux/action';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

 componentDidMount(){
   this.props.addTodo([1])
 }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.props.addTodo(this.state.currentItem.text);
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }


  render() {
    console.log(this.props.todos)
    return (
      <div className="todo-container">
        <h1>My To Do List</h1>
        <form id="todo-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="enter task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <Link to='/todolist'>CLick to see list</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todos) => dispatch(addTodo(todos)),
});

export default connect(null,mapDispatchToProps)(AddToDo);