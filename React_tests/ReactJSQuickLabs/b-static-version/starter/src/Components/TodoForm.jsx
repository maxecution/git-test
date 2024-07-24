import React, { useState } from 'react';
import DateCreated from './utils/DateCreated';
import PropTypes from 'prop-types';

function TodoForm(props) {
    const [todoDescription, settodoDescription] = useState("");
    const [todoDateCreated, settodoDateCreated] = useState(null);
    const [todoCompleted, settodoCompleted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitTodo(todoDescription, todoDateCreated, todoCompleted);
        settodoDateCreated("");
        settodoDateCreated(null);
        settodoCompleted(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='todoDescription'>Description:&nbsp;</label>
                <input type='text' name='todoDescription' placeholder='Todo Description' className='form-control' value={todoDescription}
                    onChange={event => settodoDescription(event.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='todoDateCreated'>Created on:&nbsp;</label>
                <DateCreated updateDateCreated={dateCreated => settodoDateCreated(dateCreated)} />
            </div>
            <div className='form-group'>
                <label htmlFor='todoCompleted'>Completed:&nbsp;</label>
                <input type='checkbox' name='todoCompleted' checked={todoCompleted}
                    onChange={event => settodoCompleted(event.target.checked)} />
            </div>
            <div className='form-group'>
                <input type='submit' value='submit' className={`btn ${!todoDescription ? 'btn-danger' : 'btn-primary'}`} disabled={!todoDescription} />
            </div>
        </form>
    );
};

TodoForm.propTypes = { submitTodo: PropTypes.func.isRequired };

export default TodoForm