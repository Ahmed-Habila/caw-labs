import './Column.css';
import TaskCard from './TaskCard';

const Column = ({ title, status, tasks, onMove, onDelete, onAddLabel }) => {
    const getBadgeColor = (status) => {
        switch (status) {
            case 'To Do': return 'todo-badge';
            case 'In Progress': return 'progress-badge';
            case 'Done': return 'done-badge';
            default: return '';
        }
    };

    return (
        <div className="column">
            <div className="column-header">
                <h2 className="column-title">{title}</h2>
                <span className={`task-count ${getBadgeColor(status)}`}>{tasks.length}</span>
            </div>
            <div className="column-content">
                {tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onMove={onMove}
                        onDelete={onDelete}
                        onAddLabel={onAddLabel}
                    />
                ))}
                {tasks.length === 0 && (
                    <div className="empty-state">No tasks</div>
                )}
            </div>
        </div>
    );
};

export default Column;
