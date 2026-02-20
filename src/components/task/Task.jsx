import { useState } from "react";
import "./task.css";

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const [updatedtDuration, setUpdatedDuration] = useState(props.duration);

    function handleDelete() {
        props.deleteTask(props.id);
    }
    function handleUpdate() {
        props.updateTask(props.id, updatedTitle, updatedtDuration);
        setIsEditing(false); 
    }

    return (
        <div className="task" style={{ backgroundColor: "pink" }}>
            {!isEditing  && (
            <>
            <div className="title">{props.title}</div>
            <div className="title">{props.duration}</div>
            <div className="actions">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => setIsEditing(true)}>Update</button>
            </div>
            </>
            )}
            {isEditing && (
                <form className="form">
                    <input
                    type="text"
                    name="title"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    />

                    <input
                    type="number"
                    name="duration"
                    value={updatedtDuration}
                    onChange={(e) => setUpdatedDuration(e.target.value)}
                    />

                    <button 
                    type="button"
                    onClick={handleUpdate}>
                    Validate
                    </button>
                </form>
            )}
        </div>
        
    );
}

export default Task;