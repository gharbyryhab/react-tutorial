import { useState } from "react";
import "./task.css"
import { Link, useNavigate } from "react-router-dom";

function Task (props) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.title)
    const [updatedDuration, setUpdatedDuration] = useState(props.duration)

    function handleValider() {
        props.updateTask(props.id, updatedTitle, updatedDuration); 
        
        setIsEditing(false);
    }

    const navigate = useNavigate();

    function handleLink() {
        if(props.duration > 50) {
            navigate(`${props.id}`); 
        }
        else {
            alert("Task duration is less than 50");
        }
    }

    return  (
        
        <div className="task" style={{backgroundColor: "aqua" }}>
        {!isEditing && (
        <>    
        {/* <Link to={`/tasks/${props.id}`}> */}
        <div className="title" onClick={handleLink}>{props.title}</div>
        {/* </Link> */}
        <div className="title">{props.duration}</div>
        {/* <div className="title">{props.details?.level}</div> */}
        {/* {props.details && <div className="title">{props.details.level}</div>} */}
        <div className="actions">
            <button onClick={()=>props.deleteTask(props.id)}>delete</button>
            
            <button onClick={()=>setIsEditing(true)}>update</button>
        </div>
        </>
        )}
        {

        isEditing && 
         <form  className="form">
            <input type="text" 
             name="title"
             value={updatedTitle} 
             onChange={(e)=>setUpdatedTitle(e.target.value)}
            />
            <input type="number"
             name="duration" 
             value={updatedDuration} 
            onChange={(e)=>setUpdatedDuration(e.target.value)}
             />
            <button type="button" 
            onClick={handleValider} >
                Validate</button>
        </form>
    
        }
        </div>
        
        
    );
}
export default Task;