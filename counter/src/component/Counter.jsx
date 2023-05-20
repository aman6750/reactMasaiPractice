import React, { useState } from 'react'


const Counter = ({initialValue}) =>{
    // hook use useState    
    const[count,setCount] = useState(initialValue);

     return(    
        <>
            <h1>Counter App : {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => {
                if(count>0){
                    setCount(count-1);
                }
            }}>Decrement</button>
        </>        
     )   
}


export default Counter