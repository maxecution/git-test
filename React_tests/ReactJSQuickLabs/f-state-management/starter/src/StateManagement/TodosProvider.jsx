import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const TodosStateContext = createContext();
const baseUrl = 'http://localhost:4000/todos';

export const useTodosState = () => {
    const context = useContext(TodosStateContext)
    if (context === undefined) {
        throw new Error('useTodosState must be used within TodosProvider');
    }
    return context;
}

const getAllTodos = async () => {
    try {
        return (await axios.get(baseUrl)).data;
    } catch (error) {
        return { errorMessage: `Data not available from server: ${error.message}` };
    }
}

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState({});
    useEffect(() => {
        const getTodos = async () => {
            const payload = await getAllTodos();
            setTodos(payload);
        };
        getTodos();
    }, []);
    return <TodosStateContext.Provider value={{ todos }}>
        {children}
    </TodosStateContext.Provider>
}

export default TodosProvider;