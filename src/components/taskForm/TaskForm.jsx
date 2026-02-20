import { useState } from "react";
import "./taskForm.css"
function TaskForm (props) {

    const [title, setTitle]=useState("");
    const [duration, setDuration]=useState("");

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleDuration(e){
        setDuration(e.target.value);
    }

    function handleAdd(){
        props.addTask(title, duration);
    }
    return  (
        
    <div className="taskForm">
        <form  className="form">
            <input type="text" name="title" value={title} onChange={handleTitle}/>
            <input type="number" name="duration" value={duration} onChange={handleDuration}/>
            <button type="button" onClick={handleAdd}>Add a task</button>
        </form>
    </div>
        
        
    );
}
export default TaskForm;