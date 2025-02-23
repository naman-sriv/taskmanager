import React from "react";
import { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
    title: string;
    tasks: Task[];
    status: "todo" | "review" | "completed";
    moveTask: (taskId: number, newStatus: "todo" | "review" | "completed") => void;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, status, moveTask }) => {
    return (
        <div className="column">
            <h2>{title}</h2>
            {tasks
                .filter(task => task.status === status)
                .map(task => (
                    <TaskItem key={task.id} task={task} moveTask={moveTask} />
                ))}
        </div>
    );
};

export default TaskList;
