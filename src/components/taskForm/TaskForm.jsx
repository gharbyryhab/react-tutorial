import "./taskForm.css"
function TaskForm (propos) {
    propos.SaySomething("ISAMM")
    return  (
        
    <div className="taskForm">
        <form  className="form">
            <input type="text" name="task" id=""/>
            <button type="submit">Add a task</button>
        </form>
    </div>
        
        
    );
}
export default TaskForm;