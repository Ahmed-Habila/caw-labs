import './TaskCard.css';

const TaskCard = ({ task, onMove, onDelete }) => {
    return (
        <div className="task-card">
            <h3 className="task-title">{task.title}</h3>
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

                <button
                    className="delete-btn"
                    onClick={() => onDelete(task.id)}
                    title="Delete Task"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
