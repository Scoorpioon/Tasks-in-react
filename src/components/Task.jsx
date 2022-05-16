import React from 'react';
import './Task.css'


const Task = ({task}) => {
  return ( 
    <div className="task-container">{task.tarefa}</div>

   );
}
 
export default Task;