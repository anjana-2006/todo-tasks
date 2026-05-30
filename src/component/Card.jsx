import React from 'react'

export const Card = (props) => {
    const handlecomplete = () => {
        props.ontaskcomplete(props.id)
    };

    return (
        <div className="card">
            <p>{props.text}</p>
            <button onClick={handlecomplete}> complete</button>
        </div >
    );
};