import './App.css';
import Form from "./Form";
import React, {useState} from "react";
import Todos from "./Todos";

function App() {

const [tasks, setTasks] = useState([])


    const addTask = (whatTodo) => {
        if (whatTodo){

            const newItem = {

                id: Math.random().toString().substr(2,9),
                message:    whatTodo,
                completed: false
            }

            setTasks([...tasks, newItem])

        }


    }

    const removeTask = (id) => {


    setTasks([...tasks.filter((e) => e.id !== id)])


    }


  return (
    <div className="App">
        <h1>Заданий : {tasks.length}</h1>
      <Form addTask={addTask}/>

        {tasks.map((tasks) => {

            return(

                <Todos tasks={tasks} remove={removeTask} key={tasks.id}/>

            )

        })}
    </div>
  );
}

export default App;
