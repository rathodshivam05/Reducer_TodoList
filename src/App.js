import './App.css';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <div className='App-header'>

      <h2 style={{textDecoration:"underline"}}>TodoList</h2>        
        <Todo />
      </div>
    </div>
  );
}

export default App;
