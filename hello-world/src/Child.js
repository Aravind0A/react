import React from "react";

function Child(props){
    function handleClick(){
        props.increment();
    }
    return(
        <div>
            <p>Name: {props.name2}</p>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <button onClick={handleClick}>increment Count</button>
        </div>
    );
}

export default Child;