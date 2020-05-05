import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import NewAction from './views/NewAction';
import EditAction from './views/EditAction';
import Details from './views/Details';

//remember to import axios and  @react/router for {Link}

function App() {
  return (
    <div className="App">
        <Router>
          <Main path='/' />
          <NewAuthor path='/action/new' />
          <EditAuthor path='/action/:id/edit' />
          <Details path='/action/:id' />
      </Router>
    </div>
  );
}

export default App;
