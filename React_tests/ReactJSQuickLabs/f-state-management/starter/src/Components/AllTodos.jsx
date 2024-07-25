import React, { useState, useEffect } from 'react';
import './css/AllTodos.css';
import Todo from './Todo';
import TodoModel from './utils/Todo.model';
import { useTodosState } from '../StateManagement/TodosProvider';
import Modal from './utils/Modal';


const AllTodos = () => {
    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    const { todos } = useTodosState();

    useEffect(() => {
        if (todos?.error) {
            setDataStatus({ name: `error`, message: todos.errorMessage });
        }
        else if (todos) {
            const ds = todos.length > 0 ? { name: `data`, message: null } : { name: `nodata`, message: `There were no todos previously saved` };
            setDataStatus(ds);
        }
        else {
            setDataStatus({ name: `loading`, message: `Data is loading...` });
        }
    }, [todos]);

    const populateTable = () => {
        if (todos?.length > 0) {
            return todos.map(currentTodo => {
                const { todoDescription, todoDateCreated, todoCompleted, _id } = currentTodo;
                const todo = new TodoModel(todoDescription, todoDateCreated, todoCompleted, _id);
                return <Todo todo={todo} key={todo._id} />;
            });
        }

        return (
            <tr><td id={dataStatus.name} colSpan="3">{dataStatus.message}</td></tr>
        );
    }

    return (<>
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
        {/* if ({dataStatus.name === 'error'}) { */}
        {dataStatus.name === 'error' &&
            <Modal handleClose={() => setDataStatus({ name: 'confirmedError', message: dataStatus.message })}
                message={dataStatus.message} />}
    </>
    );
};

export default AllTodos;