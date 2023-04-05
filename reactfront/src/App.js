import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import ListItem from './components/ListItem';
import axios from "axios";
import ListHeader from './components/ListHeader'

function App() {
  const [tasks, setTasks] = useState(null)

  const getData = async () =>{
    try {
      const response = await axios.get('https://reacttodo.pythonanywhere.com/')           //('http://localhost:8000/')
      const json = await response.data
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData,[])
  console.log(tasks)

  //Sort tasks
  const sortedTasks = tasks?.sort((a,b) => new Date(a.created_at)- new Date(a.created_at))

  return (
    <div className="App">
      <ListHeader listName={' 🚀 Holiday TickList'} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  );
}

export default App;
