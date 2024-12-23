// src/App.tsx
import React from 'react';
import './App.css';
import { useTaskViewModel } from './models/TaskViewModel';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskViewModel();

  return (
    <div className="App">
      <h2>ToDo</h2>
      <AddTask onAdd={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTaskCompletion} 
        onDelete={deleteTask} 
      />
    </div>
  );
};

export default App;
