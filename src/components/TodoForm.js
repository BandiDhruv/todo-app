import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value,setValue]=useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();//to prevent it from reloading defaultly
        addTodo(value);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a todo...' className='todo-input' onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
