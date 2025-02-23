import React from "react";
import { Task } from "./types";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updatePriority: (id: number, priority: "low" | "medium" | "high") => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask, updatePriority }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span>
        {task.title} ({task.priority})
      </span>
            <select
                value={task.priority}
                onChange={(e) => updatePriority(task.id, e.target.value as "low" | "medium" | "high")}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
