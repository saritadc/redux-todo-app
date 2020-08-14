import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router';

//importing files
import AddTodo from './pages/addToDoListPage/addToDo';
import ListTodo from './pages/listTodoPage/listTodo';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addTodo" component={AddTodo} />
          <Route exact path="/listTodo" component={ListTodo} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
