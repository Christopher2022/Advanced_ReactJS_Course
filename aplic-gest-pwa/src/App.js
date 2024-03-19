import './App.css';
// import Updater from './components/sw/Updater';
// import NotificationsManager from './components/pure/NotificationsManager';
import Todo from './testcomponents/Todo';

function App() {
  // const version = "app-V3-Front";

  const todos = [
    {id:1 , text:"Hacer la cama", completed:true },
    {id:2 , text:"Cocinar", completed:false },
    {id:3 , text:"Hacer la cama", completed:false }

  ]
  return (
    <div className="App">
       <h1 style={{color: '#F76765'}}>Bienvenid@</h1>
       {todos.map(todo => <Todo todo={todo}/>)}
      {/* <NotificationsManager/>
      <Updater /> */}
    </div>
  );
}

export default App;
