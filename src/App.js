import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import {Provider} from 'react-redux';

//importing files
import AddTodo from './pages/addToDoListPage/addToDo';
// import ListTodo from './pages/listTodoPage/listTodo';
import Store from './redux/store';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/addTodo" component={AddTodo} />
            {/* <Route exact path="/listTodo" component={ListTodo} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
