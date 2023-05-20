import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0}/>
      <br />
      <br />
      <Todos/>
    </div>
  );
}

export default App;
