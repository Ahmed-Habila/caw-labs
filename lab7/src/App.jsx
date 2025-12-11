import { useState } from 'react';
import './App.css';
import Column from './components/Column';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'To Do',
      labels: [],
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addLabel = (taskId, labelText, labelColor) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          labels: [...(task.labels || []), { text: labelText, color: labelColor }]
        };
      }
      return task;
    }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Kanban Board</h1>
      </header>

      <div className="main-content">
        <div className="task-form-section">
          <TaskForm onAdd={addTask} />
        </div>

        <div className="board">
          <Column
            title="To Do"
            status="To Do"
            tasks={tasks.filter(t => t.status === 'To Do')}
            onMove={moveTask}
            onDelete={deleteTask}
            onAddLabel={addLabel}
          />
          <Column
            title="In Progress"
            status="In Progress"
            tasks={tasks.filter(t => t.status === 'In Progress')}
            onMove={moveTask}
            onDelete={deleteTask}
            onAddLabel={addLabel}
          />
          <Column
            title="Done"
            status="Done"
            tasks={tasks.filter(t => t.status === 'Done')}
            onMove={moveTask}
            onDelete={deleteTask}
            onAddLabel={addLabel}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
