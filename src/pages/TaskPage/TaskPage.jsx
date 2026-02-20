import TaskForm from "../../components/taskForm/TaskForm.jsx";
import Task from "../../components/task/Task.jsx";
import TasksList from "../../components/tasksList/TasksList.jsx";

function TaskPage (){
    const steps = ["Entrer a title", "Click on add button"];

    const loading = false ;

    const tasks = [
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

    ];
function SaySomething(value) {
    alert ("Hello" + value);
}

    return(
        <div className="taskPage">
            <ul>
                {steps.map((step, index)=> (
                <li key={index}>{step}</li>
            ))}
            </ul>
            
            <TaskForm SaySomething={SaySomething} />
            {/* {loading ? ( 
                <div> loading...</div>
            ) : (
            <>
                <Task/>
                <Task/>
                <Task/>
            </>
            )} */}
            {loading && <div> loading...</div>}
            {! loading && (
                <TasksList myTasks={tasks} />
            // <>
            //     <Task title="Learn HTML" duration={30} details={{ level:1}}/>
            //     <Task title="Learn CSS"  details={{ level:2}}/>
            //     <Task title="Learn JS" duration={90} /> 
            // </>
            
            )} 
        </div>
    );
}

export default TaskPage;