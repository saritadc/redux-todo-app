import React from 'react';
import {connect} from 'react-redux';
import {setTodoData} from '../../redux/action'

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
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

 componentDidMount(){
  this.props.setTodoData([1])
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
    const newItem = this.state.currentItem;
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

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (items.key === key) {
        items.text = text;
      }
    });
    this.setState({
      items: items,
    });
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
        {/* <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        ></ListItems> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  setTodoData: (todos) => dispatch(setTodoData(todos)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo);