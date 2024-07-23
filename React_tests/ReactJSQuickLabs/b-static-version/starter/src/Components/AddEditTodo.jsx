import React from 'react';
import './css/AddEditTodo.css';
import TodoForm from './TodoForm';

function AddEditTodo() {
    return (
        <>
            <div className='addEditTodo row'>
                <h3>Add/Edit Todo</h3>
            </div>
            <TodoForm />
        </> // Important to wrap in React.Fragments tags for TodoForm component
    )
}

export default AddEditTodo