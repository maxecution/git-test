import React, { useState } from 'react';
import DateCreated from './utils/DateCreated';

function TodoForm() {
    const [todoDescription, settodoDescription] = useState("");
    const [todoDateCreated, settodoDateCreated] = useState(null);
    const [todoCompleted, settodoCompleted] = useState(false);

    return (
        <form>
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

export default TodoForm