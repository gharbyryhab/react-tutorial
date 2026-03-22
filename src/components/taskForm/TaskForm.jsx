import { useContext, useEffect, useState } from "react";
import "./taskForm.css"
import { RoleContext } from "../../context/RoleContext";
function TaskForm (props) {
    // propos.SaySomething("ISAMM")
    const connectedUser = useContext(RoleContext);

    const [title, setTitle]=useState("learn");
    const [duration, setDuration]=useState(0);

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleDuration(e){
        setDuration(e.target.value);
    }

    function handleAdd(){
        props.addTask(title, duration);
    }

    useEffect(()=>{
        document.title = title;
    });
    return  (
        
    <div className="taskForm">
        Hello {connectedUser.role}
        <form  className="form">
            <input type="text" name="title" value={title} onChange={handleTitle}/>
            <input type="number" name="duration" value={duration} onChange={handleDuration}/>
            <button type="button" onClick={handleAdd}>Add a task</button>
        </form>
    </div>
        
        
    );
}
export default TaskForm;