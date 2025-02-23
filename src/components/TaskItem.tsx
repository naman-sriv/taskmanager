import React from "react";
import { Task } from "../types";

interface TaskItemProps {
    task: Task;
    moveTask: (taskId: number, newStatus: "todo" | "review" | "completed") => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, moveTask }) => {
    return (
        <div className="task-card">
            <span className="tag">🔹 {task.priority.toUpperCase()}</span>
            <h3>{task.title}</h3>
            {task.description && <p>{task.description}</p>}
            <div className="task-meta">
                <button onClick={() => moveTask(task.id, "todo")}>To Do</button>
                <button onClick={() => moveTask(task.id, "review")}>For Review</button>
                <button onClick={() => moveTask(task.id, "completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TaskItem;
