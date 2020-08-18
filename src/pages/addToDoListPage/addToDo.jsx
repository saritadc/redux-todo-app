import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { addTodo } from '../../redux/action';
import routes from '../../constants/routes'

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " "
      // items: [],
      // currentItem: {
      //   text: "",
      //   key: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

//  componentDidMount(){
//    this.props.addTodo([1])
//  }

  handleInput(e) {
    this.setState({
      text: e.target.value
      // currentItem: {
      // text: e.target.value,
      // key: Date.now(),
      // },
    });
  }

  addItem(e) {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text:""
    })
    // const newItem = this.props.addTodo(this.state.currentItem.text);
    // console.log(newItem);
    // if (newItem.text !== "") {
    //   const newItems = [...this.state.items, newItem];
    //   this.setState({
    //     items: newItems,
    //     currentItem: {
    //       text: "",
    //       key: "",
    //     },
    //   });
    // }
  }


  render() {
    // console.log(this.props.todos)
    return (
      <div className="todo-container">
        <h1>My To Do List</h1>
        <form id="todo-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="enter task"
            value={this.state.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <Link to={routes.LIST_TODO}>CLick to see list</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todos) => dispatch(addTodo(todos)),
});

const addItem = connect(null,mapDispatchToProps)(AddToDo);
export default addItem;