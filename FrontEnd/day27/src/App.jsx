import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography variant="h2">Todo List</Typography>
      <AddTodo />
      <ListTodo />
    </div>

  )
}

export default App;
