import {usestate} from "react";

export const Counter = (props) =>{
    const[count,setcount]=usestate(0);

    const handleIncrement= () => {
        setcount(count =count+1);
    };

    const handledDecrement= () => {
        setcount(count=count-1);
    };

    console.log(count);
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handledDecrement}>Decrement</button>
    </div>
    );
};