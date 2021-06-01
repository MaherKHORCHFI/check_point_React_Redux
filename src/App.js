import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'
import TodoCart from './component/TodoCart';
import AddTodo from './component/AddTodo';

function App() {
  const todoList = useSelector(state => state.todos)


     return (
    <div className="App">
      {    console.log(todoList)
}
      <AddTodo />
      {
      todoList.map(todo => <TodoCart key={todo.id} todo={todo} />)
      }
    </div>
  );
}

export default App;
