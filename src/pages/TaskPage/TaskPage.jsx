import TaskForm from "../../components/taskForm/TaskForm.jsx";
import Task from "../../components/task/Task.jsx";
import TasksList from "../../components/tasksList/TasksList.jsx";
import { useState, useEffect } from "react";
import * as api from "../../services/tasks.service";

function TaskPage() {

    const steps = ["Entrer a title", "Click on add button"];

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    // Fetch tasks
    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);
            try {
                const tasks = await api.fetchTasks();
                setTasks(tasks);
                setError(false);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

    // Ajouter une tâche
    async function addTask(title, duration) {
        const newTask = await api.addTask({ title, duration });

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    // Modifier une tâche
    async function updateTask(id, title, duration) {
        const updatedTask = await api.updateTask(id, title, duration);

        const newTasks = tasks.map((task) => {
            if (task._id === id) {
                return updatedTask;
            }
            return task;
        });

        setTasks(newTasks);
    }

    // Supprimer une tâche
    async function deleteTask(id) {
        await api.deleteTask(id);

        const newTasks = tasks.filter((task) => task._id !== id);

        setTasks(newTasks);
    }

    // Afficher / cacher la liste
    function toggleVisibility(e) {
        console.log(e);
        setIsVisible(!isVisible);
    }

    return (
        <div className="taskPage">

            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <button onClick={toggleVisibility}>Toggle Visibility</button>
            <button onClick={(e) => toggleVisibility(e)}>Toggle Visibility</button>

            <TaskForm addTask={addTask} />

            <input
                type="text"
                name="title"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />

            {error && <div>Error...</div>}
            {loading && <div>Loading...</div>}

            {!loading && isVisible && (
                <TasksList
                    myTasks={tasks}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            )}

        </div>
    );
}

export default TaskPage;