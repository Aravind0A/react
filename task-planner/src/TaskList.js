import React, { useState } from "react";

function TaskList({listTasks}){

    return(
        <div>
       
            <ul>
                {listTasks.map((list,index)=>{
                 return <li key={index}>{list}</li>

                })}
            </ul>
        </div>
    );
}

export default TaskList