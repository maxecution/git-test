import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
//import sampleTodos from './sampleTodos.json'; (No longer seeded after importing axios and using useEffect)

import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
import Modal from './Components/utils/Modal'

const TODOSURL = 'http://localhost:4000/todos';

function App() {

  const [todos, setTodos] = useState({});
  const [getError, setGetError] = useState('');
  const [postError, setPostError] = useState('');

  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos());
    }
    setTimeout(() => {
      getData();
    }, 5000)
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get(TODOSURL);
      return res.data.length ? { todos: res.data } : { error: 'There are no todos stored' }
    } catch (e) {
      setGetError(`Data not available from server: ${e.message}`);
      return { error: `Data not available from server: ${e.message}` };
    }
  };

  const submitTodo = async (todo) => {
    setPostError('');
    try {
      await axios.post(TODOSURL, todo);
    } catch (e) {
      setPostError('Unable to add the todo');
    } finally {
      setTodos(await getTodos());
    }
  };

  return (
    <>
      {getError && <Modal handleClose={() => setGetError('')} message={getError} />}
      {postError && <Modal handleClose={() => setPostError('')} message={postError} />}
      <div className="container">
        <Header />
        <div className="container">
          <AllTodos data={todos} />
          <AddEditTodo submitTodo={submitTodo} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
