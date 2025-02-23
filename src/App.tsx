import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { Task } from "./types";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string, description: string, priority: "low" | "medium" | "high") => {
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            priority,
            status: "todo"
        };
        setTasks([...tasks, newTask]);
    };

    const moveTask = (taskId: number, newStatus: "todo" | "review" | "completed") => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <AddTask addTask={addTask} />
            <div className="kanban">
                <TaskList title="To Do" tasks={tasks} status="todo" moveTask={moveTask} />
                <TaskList title="For Review" tasks={tasks} status="review" moveTask={moveTask} />
                <TaskList title="Completed" tasks={tasks} status="completed" moveTask={moveTask} />
            </div>
        </div>
    );
};

export default App;
