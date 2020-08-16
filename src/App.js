import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import {Provider} from 'react-redux';

//importing files
import AddTodo from './pages/addToDoListPage/addToDo';
import ListItems from './pages/listItemsPage/listItems';
import Home from './pages/home/home';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/addTodo" component={AddTodo} />
            <Route exact path="/listTodo" component={ListItems} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
