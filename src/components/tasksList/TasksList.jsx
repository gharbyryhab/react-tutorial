import Task from "../task/Task";
function TasksList(props){

return (
    <div className="tasksList">
        {props.myTasks.map((task) => (
            <Task key={task._id} title={task.title} duration={task.duration} />
        ))}

    </div>

)




}
export default TasksList;