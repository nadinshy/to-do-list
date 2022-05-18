import './App.css';
import imageBee from './bee.jpg';
import imageGrass from './grass.jpg';
import { ToDoList } from './TodoList';

function App() {
  return (
    <div className="App">

      <div className='header'>
       <h1>To Do List</h1>
       </div>
     
     <div className='container'>
      <ToDoList/>
     <img src={ imageBee } width='200px' alt='bee' />
     </div>
<div className='footer'>
     <img src={ imageGrass } width='450px' alt='grass' />
     </div>
    </div>
   
  );
}

export default App;
