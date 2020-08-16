import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
  console.log("props", props)
  return (
    <div>
      <h1> home page</h1>
      <p>
        <Link to="/addToDo">Add ToDo Items</Link>
      </p>
      <p>
        <Link to="/listToDo">List ToDO Items</Link>
      </p>
    </div>
  );
};