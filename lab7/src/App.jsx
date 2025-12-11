import { useState } from 'react';
import './App.css';
import Column from './components/Column';

const INITIAL_COLUMNS = [
  { id: 'col-1', title: 'To Do' },
  { id: 'col-2', title: 'In Progress' },
  { id: 'col-3', title: 'Done' },
];

const INITIAL_TASKS = [
  { id: 1, content: 'Learn React', columnId: 'col-1', labels: [] },
  { id: 2, content: 'Setup Vite', columnId: 'col-3', labels: [{ text: 'Dev', color: '#3b82f6' }] },
  { id: 3, content: 'Build Kanban', columnId: 'col-2', labels: [] },
];

function App() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  // Column Actions
  const handleAddColumnClick = () => {
    setIsAddingColumn(true);
    setNewColumnTitle('');
  };

  const confirmAddColumn = (e) => {
    e.preventDefault();
    if (newColumnTitle.trim()) {
      const newColumn = {
        id: `col-${Date.now()}`,
        title: newColumnTitle.trim(),
      };
      setColumns([...columns, newColumn]);
      setIsAddingColumn(false);
      setNewColumnTitle('');
    }
  };

  const cancelAddColumn = () => {
    setIsAddingColumn(false);
    setNewColumnTitle('');
  };

  const updateColumnTitle = (columnId, newTitle) => {
    setColumns(columns.map(col =>
      col.id === columnId ? { ...col, title: newTitle } : col
    ));
  };

  const deleteColumn = (columnId) => {
    setColumns(columns.filter(col => col.id !== columnId));
    setTasks(tasks.filter(task => task.columnId !== columnId));
  };

  // Task Actions
  const addTask = (columnId, content) => {
    const newTask = {
      id: Date.now(),
      content,
      columnId,
      labels: [],
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = (taskId, targetColumnId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, columnId: targetColumnId } : task
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
          labels: [...task.labels, { text: labelText, color: labelColor }]
        };
      }
      return task;
    }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Kanban Board</h1>

        {isAddingColumn ? (
          <form onSubmit={confirmAddColumn} className="add-board-form">
            <input
              autoFocus
              type="text"
              placeholder="Board Name"
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              className="board-name-input"
            />
            <div className="add-board-actions">
              <button type="submit" className="confirm-board-btn">Create</button>
              <button type="button" onClick={cancelAddColumn} className="cancel-board-btn">Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={handleAddColumnClick} className="add-column-btn">+ Add Board</button>
        )}
      </header>

      <div className="main-content">
        <div className="board">
          {columns.map(col => (
            <Column
              key={col.id}
              column={col}
              tasks={tasks.filter(t => t.columnId === col.id)}
              onRename={updateColumnTitle}
              onDeleteColumn={deleteColumn}
              onAddTask={addTask}
              onMoveTask={moveTask}
              onDeleteTask={deleteTask}
              onAddLabel={addLabel}
              allColumns={columns}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
