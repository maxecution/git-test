import React from 'react';
import PropTypes from 'prop-types';
import './css/AllTodos.css';

import Todo from './Todo';
import TodoModel from './utils/Todo.model';
import { useEffect, useState } from 'react';

const AllTodos = ({ data }) => {
    const [dataStatus, setDataStatus] = useState({ name: 'loading', message: 'Data is loading...' });

    useEffect(() => {
        if (data?.error) {
            setDataStatus({ name: 'error' }, { message: data.error });
        } else if (data?.todos) {
            const ds = data.todos.length > 0 ? { name: data, message: null } : { name: 'nodata', message: 'There were no todos previously saved' };
        } else {
            setDataStatus({ name: 'loading', message: 'Data is loading...' });
        }
    }, [data]);

    const populateTable = () => {
        if (data?.todos?.length > 0) {
            return data.todos.map(currentTodo => {
                const {
                    todoDescription,
                    todoDateCreated,
                    todoCompleted,
                    _id } = currentTodo;
                const todo = new TodoModel(
                    todoDescription,
                    todoDateCreated,//?.toISOString(),
                    todoCompleted,
                    _id)
                return <Todo todo={todo} key={todo._id} />
            });
        };
        return (
            <tr>
                <td id={dataStatus.name} colSpan="3">{dataStatus.message}</td>
            </tr>
        );
    };

    return (
        <div className="row">
            <h3>Todos List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{populateTable()}</tbody>
            </table>
        </div>
    );
};

AllTodos.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.exact({
            todos: PropTypes.arrayOf(
                PropTypes.exact({
                    _id: PropTypes.string,
                    todoDescription: PropTypes.string,
                    todoDateCreated: PropTypes.string,
                    todoCompleted: PropTypes.bool
                })
            )
        }),
        PropTypes.exact({
            error: PropTypes.string
        }),
        PropTypes.exact({})
    ])
};

export default AllTodos;

//Original Code, replaced when useEffect was introduced
/* const AllTodos = ({ data }) => {
    const todos = data.todos?.map(currentTodo => {
        const todo = new TodoModel(currentTodo.todoDescription, currentTodo.todoDateCreated, currentTodo.todoCompleted, currentTodo._id);
        return <Todo todo={todo} key={todo._id} />
    });
    return (
        <div className="row">
            <h3>Todos List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{todos}</tbody>
            </table>
        </div>
    );
};

AllTodos.propTypes = {
    data: PropTypes.exact({
        todos: PropTypes.arrayOf(
            PropTypes.exact({
                _id: PropTypes.string,
                todoDescription: PropTypes.string,
                todoDateCreated: PropTypes.string,
                todoCompleted: PropTypes.bool
            })
        )
    }) */

