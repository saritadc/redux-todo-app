import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-dom'

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem:[{
        text: "",
        key: "",
      }]
    }
    
  };

  render(){
    const todos = this.props.todos
    console.log(todos, "abc")
  return(
  <div>

    {
      todos.map(todo => <div>{todos}</div>)
    }
    <p>"Hello world"</p>
    <Link to='/addtodo'>CLick to see list</Link>
  </div>

  );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});


export default connect(mapStateToProps)(ListItems);