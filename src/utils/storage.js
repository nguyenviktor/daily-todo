export const STORAGE_KEY = 'daily_todo_tasks_v1';

export const loadTasks = () => {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) return [];
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Failed to load tasks from local storage', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to local storage', error);
  }
};
