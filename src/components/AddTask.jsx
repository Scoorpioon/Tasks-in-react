import React, {useState} from 'react';
import './AddTask.css';
import Button from './Button.jsx'

const AddTask = ({ handleTaskAdittion }) => {
  const [inputData, setInputData] = useState('')
  
  const handleInputChange = (data) => {
    setInputData(data.target.value)

  }

  const handleAddTaskClick = () => {
    handleTaskAdittion(inputData)

  }

  return (
    <div className="addtask-container">
      <input onChange={handleInputChange} value={inputData} type="text" className="addtask-input" />
      <Button onClick={handleAddTaskClick}>Enviar!</Button>
    </div>
  );

}

export default AddTask