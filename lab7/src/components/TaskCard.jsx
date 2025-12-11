import { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onMove, onDelete, onAddLabel }) => {
    const [showLabelInput, setShowLabelInput] = useState(false);
    const [labelText, setLabelText] = useState('');

    const handleAddLabel = (e) => {
        e.preventDefault();
        if (labelText.trim()) {
            const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            onAddLabel(task.id, labelText.trim(), randomColor);
            setLabelText('');
            setShowLabelInput(false);
        }
    };

    return (
        <div className="task-card">
            <div className="task-header">
                <h3 className="task-title">{task.title}</h3>
            </div>

            {task.labels && task.labels.length > 0 && (
                <div className="task-labels">
                    {task.labels.map((label, index) => (
                        <span
                            key={index}
                            className="task-label"
                            style={{ backgroundColor: label.color + '20', color: label.color, border: `1px solid ${label.color}40` }}
                        >
                            {label.text}
                        </span>
                    ))}
                </div>
            )}

            <p className="task-description">{task.description}</p>

            <div className="task-actions">
                <div className="move-actions">
                    {task.status !== 'To Do' && (
                        <button
                            className="action-btn back-btn"
                            onClick={() => onMove(task.id, task.status === 'Done' ? 'In Progress' : 'To Do')}
                            title="Move Back"
                        >
                            ←
                        </button>
                    )}

                    {task.status !== 'Done' && (
                        <button
                            className="action-btn forward-btn"
                            onClick={() => onMove(task.id, task.status === 'To Do' ? 'In Progress' : 'Done')}
                            title="Move Forward"
                        >
                            →
                        </button>
                    )}
                </div>

                <div className="right-actions">
                    <button
                        className="action-btn label-btn"
                        onClick={() => setShowLabelInput(!showLabelInput)}
                        title="Add Label"
                    >
                        +
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => onDelete(task.id)}
                        title="Delete Task"
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
                        value={labelText}
                        onChange={(e) => setLabelText(e.target.value)}
                        placeholder="Label..."
                        className="label-input"
                    />
                </form>
            )}
        </div>
    );
};

export default TaskCard;
