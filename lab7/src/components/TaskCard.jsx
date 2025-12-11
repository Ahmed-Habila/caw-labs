import { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({ task, currentColumnId, allColumns, onMove, onDelete, onAddLabel }) => {
    const [showLabelInput, setShowLabelInput] = useState(false);
    const [newLabelText, setNewLabelText] = useState('');

    const handleAddLabel = (e) => {
        e.preventDefault();
        if (newLabelText.trim()) {
            // Generate a random color or pick from a set
            const colors = ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            onAddLabel(task.id, newLabelText.trim(), randomColor);
            setNewLabelText('');
            setShowLabelInput(false);
        }
    };

    const handleMoveChange = (e) => {
        if (e.target.value) {
            onMove(task.id, e.target.value);
        }
    }

    return (
        <div className="task-card">
            <div className="task-content">
                {task.content}
            </div>

            {task.labels && task.labels.length > 0 && (
                <div className="task-labels">
                    {task.labels.map((label, index) => (
                        <span
                            key={index}
                            className="task-label"
                            style={{ backgroundColor: label.color + '40', color: label.color }}
                        >
                            {label.text}
                        </span>
                    ))}
                </div>
            )}

            <div className="task-controls">
                <select
                    className="move-select"
                    value={currentColumnId}
                    onChange={handleMoveChange}
                    onClick={(e) => e.stopPropagation()} // Prevent card click if implemented later
                >
                    {allColumns.map(col => (
                        <option key={col.id} value={col.id}>{col.id === currentColumnId ? 'Move to...' : col.title}</option>
                    ))}
                </select>

                <div className="icon-actions">
                    <button
                        className="icon-btn label-btn"
                        onClick={() => setShowLabelInput(!showLabelInput)}
                        title="Add Label"
                    >
                        🏷️
                    </button>
                    <button
                        className="icon-btn delete-btn"
                        onClick={() => onDelete(task.id)}
                        title="Delete"
                    >
                        ×
                    </button>
                </div>
            </div>

            {showLabelInput && (
                <form onSubmit={handleAddLabel} className="label-form">
                    <input
                        autoFocus
                        type="text"
                        placeholder="Label..."
                        value={newLabelText}
                        onChange={(e) => setNewLabelText(e.target.value)}
                        className="label-input"
                    />
                    <button type="submit" className="label-submit">Add</button>
                </form>
            )}
        </div>
    );
};

export default TaskCard;
