// src/components/TaskList.tsx
import React from 'react';
import { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <p key={task.id}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)} 
          />
          {task.title}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </p>
      ))}
    </ul>
  );
};

export default TaskList;