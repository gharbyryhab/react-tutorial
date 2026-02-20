import TaskForm from "../../components/taskForm/TaskForm.jsx";
import Task from "../../components/task/Task.jsx";
import TasksList from "../../components/tasksList/TasksList.jsx";
import { useState } from "react";

function TaskPage (){


    const steps = ["Entrer a title", "Click on add button"];

    const loading = false ;

    const [tasks, setTasks] = useState([
    {
        _id:"1",
        title:"Learn HTML",
        duration:30,
    },
     {
        _id:"2",
        title:"Learn CSS",
        duration:60,
    },
    {
        _id:"3",
        title:"Learn JS",
        duration:90,
    },
    {
        _id:"4",
        title:"Learn React",
        duration:120,
    },

    ]);



function addTask(title,duration){
    console.log("title, duration :",title,duration);
    
    const newTask = {
        _id:Math.random().toString(),
        title,
        duration
    };
    
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    
}

function deleteTask(id){
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
}


function updateTask(id, title, duration) {
    const newTasks = tasks.map((task) => {
        if (task._id === id){
            return {...task, title, duration};
        }
        return task;
    });
    
    setTasks(newTasks);
}

const [isVisible, setIsVisible] = useState(true);
function toggleVisibility(e){
    console.log(e);
    setIsVisible(!isVisible);
}

    return(
        <div className="taskPage">
            <ul>
                {steps.map((step, index)=> (
                <li key={index}>{step}</li>
            ))}
            </ul>
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            <button onClick={(e)=>toggleVisibility(e)}>Toggle Visibility</button>
            <TaskForm addTask={addTask} />
            {
                
            }
            {loading && <div> loading...</div>}
            {! loading && isVisible && 
                <TasksList 
                    myTasks={tasks} 
                    deleteTask={deleteTask} 
                    updateTask={updateTask} 
                />
                        
            
            } 
        </div>
    );
}

export default TaskPage;