import { useState } from 'react';
import './App.css';
import Counters from './component/counter';
import TodoApps from './component/todoApp';


function App(){

  const [toggle, setToggle] = useState(false); 

 
    return (
                 <div className="App">
                <button onClick={()=> setToggle(!toggle)}>
                  {toggle?"Show TodoApp":"Show CounterApp"}
                </button>

                  <div>{false}</div>
                  <div>{true}</div>
                  <div>{undefined}</div>


                  {toggle? <Counters/>: <TodoApps/>} 
                  {/* or we can write in diffrent ways also */}
                  {/* {toggle && <Counters/>} */}
                </div> 
         );
             
}

export default App;
