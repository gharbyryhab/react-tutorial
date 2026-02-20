import "./task.css"

function Task (props) {
    return  (
        
        <div className="task" style={{backgroundColor: "pink" }}>
        <div className="title">{props.title}</div>
        <div className="title">{props.duration}</div>
        {/* <div className="title">{props.details?.level}</div> */}
        {/* {props.details && <div className="title">{props.details.level}</div>} */}
        <div className="actions">
            <button>delete</button>
            
            <button>update</button>
        </div>
    </div>
        
        
    );
}
export default Task;