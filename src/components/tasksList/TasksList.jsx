import Task from "../task/Task";
function TasksList(props){

return (
    <div className="tasksList">
        {props.myTasks.map((task) => (
            <Task key={task._id} id={task._id} title={task.title} duration={task.duration} deleteTask={props.deleteTask} updateTask={props.updateTask}/>
        ))}

    </div>

)




}
export default TasksList;
