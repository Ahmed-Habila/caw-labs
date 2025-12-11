import { useState } from 'react';
import './Column.css';
import TaskCard from './TaskCard';

const Column = ({ column, tasks, onRename, onDeleteColumn, onAddTask, onMoveTask, onDeleteTask, onAddLabel, allColumns }) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [editedTitle, setEditedTitle] = useState(column.title);
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [newCardContent, setNewCardContent] = useState('');

    const handleTitleSubmit = (e) => {
        e.preventDefault();
        if (editedTitle.trim()) {
            onRename(column.id, editedTitle.trim());
        }
        setIsEditingTitle(false);
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        if (newCardContent.trim()) {
            onAddTask(column.id, newCardContent.trim());
            setNewCardContent('');
            setIsAddingCard(false);
        }
    };

    return (
        <div className="column">
            <div className="column-header">
                {isEditingTitle ? (
                    <form onSubmit={handleTitleSubmit} className="title-form">
                        <input
                            autoFocus
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            onBlur={() => { handleTitleSubmit({ preventDefault: () => { } }); }}
                            className="title-input"
                        />
                    </form>
                ) : (
                    <h2 className="column-title" onDoubleClick={() => setIsEditingTitle(true)}>
                        {column.title}
                    </h2>
                )}

                <div className="header-actions">
                    <span className="task-count">{tasks.length}</span>
                    <button
                        className="delete-col-btn"
                        onClick={() => onDeleteColumn(column.id)}
                        title="Delete Board"
                    >
                        ×
                    </button>
                </div>
            </div>

            <div className="column-content">
                {tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        currentColumnId={column.id}
                        allColumns={allColumns}
                        onMove={onMoveTask}
                        onDelete={onDeleteTask}
                        onAddLabel={onAddLabel}
                    />
                ))}

                {isAddingCard ? (
                    <form onSubmit={handleAddCard} className="add-card-form">
                        <textarea
                            autoFocus
                            value={newCardContent}
                            onChange={(e) => setNewCardContent(e.target.value)}
                            placeholder="Enter card details..."
                            className="card-input"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleAddCard(e);
                                }
                            }}
                        />
                        <div className="add-card-actions">
                            <button type="submit" className="confirm-btn">Add</button>
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => setIsAddingCard(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <button
                        className="add-card-btn"
                        onClick={() => setIsAddingCard(true)}
                    >
                        + Add Card
                    </button>
                )}
            </div>
        </div>
    );
};

export default Column;
