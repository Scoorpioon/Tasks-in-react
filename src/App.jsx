import React, {useState} from 'react'
import Tasks from './components/Tasks.jsx'
import './App.css'
import AddTask from './components/AddTask.jsx'

const App = () => { 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tarefa: 'Praticar calistenia',
      completed: false
    },
    {
      id: 2,
      tarefa: 'Estudar programação',
      completed: true

    }
  ]) 

  function handleTaskAdittion(taskTitle) {
    const newTask = [...tasks, {
      id: Math.random(10),
      tarefa: taskTitle,
      completed: false

    }]
    setTasks(newTask)
  }
 
  return (
        <>
        <div className="container">
          <AddTask handleTaskAdittion={handleTaskAdittion} />
          <Tasks tasks={tasks} />
        </div>
        </>)

}

export default App;