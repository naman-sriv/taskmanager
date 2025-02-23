import React from "react";
import { Task } from "./types.ts";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updatePriority: (id: number, priority: "low" | "medium" | "high") => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask, updatePriority }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                        updatePriority={updatePriority}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
