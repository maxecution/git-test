import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
import NotFound from './Components/utils/NotFound';
import TodosProvider from './StateManagement/TodosProvider';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container">
          <TodosProvider>
            <Switch>
              <Route exact path="/">
                <AllTodos />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </TodosProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
