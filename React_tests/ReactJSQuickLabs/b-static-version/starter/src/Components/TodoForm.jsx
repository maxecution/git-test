import React from 'react';
import DateCreated from '.utils/DateCreated';

function TodoForm() {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor={todoDescription}>Description:&nbsp;</label>
                <input type='text' name={todoDescription} placeholder='Todo Description' className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor={todoDateCreated}>Created on:&nbsp;</label>
                <DateCreated />
            </div>
            <div className='form-group'>
                <label htmlFor='todoCompleted'>Completed:&nbsp;</label>
                <input type='checkbox' name={todoCompleted}></input>
            </div>
            <div className='form-group'>
                <input type='submit' value='submit' className='btn btn-primary' />
            </div>
        </form>
    );
};

export default TodoForm