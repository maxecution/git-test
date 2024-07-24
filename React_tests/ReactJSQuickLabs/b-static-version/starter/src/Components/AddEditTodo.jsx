import React from 'react';
import PropTypes from 'prop-types';
import './css/AddEditTodo.css';
import TodoForm from './TodoForm';
import generateTodoId from './utils/generateId';
import TodoModel from './utils/Todo.model';

const AddEditTodo = props => {
    const submitTodo = (todoDescription, todoDateCreated, todoCompleted) => {
        const _id = generateTodoId();
        /* if (todoDateCreated === undefined || todoDateCreated === null) {
            console.error("todoDateCreated is required");
            return;
        } */
        const newTodo = new TodoModel(
            todoDescription,
            todoDateCreated?.toISOString(),
            todoCompleted,
            _id
        );
        props.submitTodo(newTodo);
    };

    return (
        <>
            <div className='addEditTodo row'>
                <h3>Add/Edit Todo</h3>
            </div>
            <TodoForm />
        </> // Important to wrap in React.Fragments tags because multiple closed tags
    );
};

AddEditTodo.propTypes = { submitTodo: PropTypes.func.isRequired };

export default AddEditTodo