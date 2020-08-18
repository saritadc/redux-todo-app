import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import {Provider} from 'react-redux';

//importing files
import addItem from './pages/addToDoListPage/addToDo';
import listItems from './pages/listItemsPage/listItems';
import Home from './pages/home/home';
import routes from './constants/routes';

import Store from './redux/store';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.ADD_TODO} component={addItem} />
            <Route exact path={routes.LIST_TODO} component={listItems} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
