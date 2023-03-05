import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer from './components/Answer';

function App() {
  let info = [
    {
      name:"Ritesh",
      place:"India",
    infox:{
      a:1,
      b:2,
    },
  },
    {name:"Aman",place:"usa"},
    {name:"pragati",place:"russia"},
    {name:"gaurav",place:"dubai"},
    {name:"divya",place:"bithauli"},
  ];
  return (
    <div className="App">
      <Hello></Hello>
      <h1>hii</h1>
      {info.map((user)=>(
        
          <div>
            <Answer{...user}/>
          </div>
        
      ))}
    </div>
  );
}

export default App;
