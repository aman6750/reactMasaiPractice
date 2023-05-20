import React, { useState } from 'react'

const Todos = () => {
    const[newTodo,setTodo] = useState("Aman");
    const[todos,setTodos] = useState([]);

    const handleChange = (e)=>{
        setTodo(e.target.value);
    }

  return(
    <div>
      Todo
      <input value={newTodo} onChange={handleChange}/>
      <button onClick={()=>{
        setTodos([...todos ,{id:Date.now(),value:newTodo,isCompleted:false},]);
        setTodo("");
      }}>Add</button>

      {todos.map((todo)=>(
        <div>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todos

