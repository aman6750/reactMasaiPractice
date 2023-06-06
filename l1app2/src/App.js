import './App.css';
import React, { useState } from 'react'
import List from './Component/List'


function App() {

  const[isAuth,setIsAuth] = useState(false) 

  const handleLogin=()=>{
    setIsAuth(true);
  }

  if(!isAuth){
    return <div>User is not logged in ,please
      <button onClick={handleLogin}>Login</button>
    </div>
  }

  return (
    <div className="App">
     <List/>
    </div>

  );

}

export default App;
  