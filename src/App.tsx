import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { Task } from "./types";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string, priority: "low" | "medium" | "high") => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
            priority
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const updatePriority = (id: number, priority: "low" | "medium" | "high") => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, priority } : task
        ));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTask addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                updatePriority={updatePriority}
            />
        </div>
    );
};

export default App;
