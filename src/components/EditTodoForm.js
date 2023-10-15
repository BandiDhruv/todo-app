import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const[value,setValue]=useState(task.task);
    const handleSubmit = (e) =>{
        e.preventDefault();//to prevent it from reloading defaultly
        editTodo(value,task.id);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='Update Task....' className='todo-input' onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
