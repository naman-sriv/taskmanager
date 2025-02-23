import React, { useState } from "react";

interface AddTaskProps {
    addTask: (title: string, description: string, priority: "low" | "medium" | "high") => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!taskTitle.trim()) return;

        addTask(taskTitle, taskDescription, priority);
        setTaskTitle("");
        setTaskDescription("");
        setPriority("low");
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title..."
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <textarea
                placeholder="Task description..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
        </div>
    );
};

export default AddTask;
