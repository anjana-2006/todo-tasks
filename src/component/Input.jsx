import { useState, useEffect } from 'react';
export const Input = (props) => {
    const [enteredvalue, setEnteredValue] = useState('');
    const [isvalid, setIsValid] = useState(true);

    const handlechange = (event) => {
        event.preventDefault();
        setEnteredValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTask(enteredvalue);
        setEnteredValue('');
    };

    useEffect(() => {
        if (enteredvalue.trim().length > 3) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [enteredvalue]);

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter your task" onChange={handlechange} value={enteredvalue} />
            <button disabled={!isvalid} className="add-task-button">Create</button>
        </form>)
};
