import { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="New Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    placeholder="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input"
                />
            </div>
            <button type="submit" className="add-btn">
                + Add Task
            </button>
        </form>
    );
};

export default TaskForm;
