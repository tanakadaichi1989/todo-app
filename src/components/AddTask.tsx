// src/components/AddTask.tsx
import React, { useState } from 'react';

interface AddTaskProps {
  onAdd: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;