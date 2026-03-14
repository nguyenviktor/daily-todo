import React, { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from './utils/storage';

function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [inputValue, setInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // Initial load
  useEffect(() => {
    const today = new Date().toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(today);
  }, []);

  // Save on tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: typeof crypto.randomUUID === 'function' 
        ? crypto.randomUUID() 
        : Date.now().toString(36) + Math.random().toString(36).substring(2),
      text: inputValue.trim(),
      completed: false,
      createdAt: Date.now()
    };

    setTasks([newTask, ...tasks]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Tasks</h1>
        <p>{currentDate}</p>
      </header>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          className="task-input"
          placeholder="Thêm công việc mới..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Thêm
        </button>
      </form>

      <div className="task-list-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>Tuyệt vời! Bạn không có công việc nào tồn đọng. ✨</p>
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <label className="task-content">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className="task-text" title={task.text}>
                    {task.text}
                  </span>
                </label>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                  aria-label="Xóa công việc"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
