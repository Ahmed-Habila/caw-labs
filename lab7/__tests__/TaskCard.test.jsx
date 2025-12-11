import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../src/components/TaskCard';
import React from 'react';

const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    status: 'To Do',
    labels: [{ text: 'Urgent', color: '#ef4444' }]
};

describe('TaskCard Component', () => {
    test('renders task details and labels', () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByText('Urgent')).toBeInTheDocument();
    });

    test('calls onMove when arrow button is clicked', () => {
        const onMove = jest.fn();
        render(<TaskCard task={mockTask} onMove={onMove} />);

        const forwardBtn = screen.getByTitle('Move Forward');
        fireEvent.click(forwardBtn);

        expect(onMove).toHaveBeenCalledWith(1, 'In Progress');
    });

    test('calls onDelete when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(<TaskCard task={mockTask} onDelete={onDelete} />);

        const deleteBtn = screen.getByTitle('Delete Task');
        fireEvent.click(deleteBtn);

        expect(onDelete).toHaveBeenCalledWith(1);
    });

    test('can toggle and add label', () => {
        const onAddLabel = jest.fn();
        render(<TaskCard task={mockTask} onAddLabel={onAddLabel} />);

        // 1. Click Add Label button (+)
        const addLabelBtn = screen.getByTitle('Add Label');
        fireEvent.click(addLabelBtn);

        // 2. Type "Bug"
        const input = screen.getByPlaceholderText('Label...');
        fireEvent.change(input, { target: { value: 'Bug' } });

        // 3. Submit
        fireEvent.submit(input);

        // Verify callback
        expect(onAddLabel).toHaveBeenCalledWith(1, 'Bug', expect.any(String));
    });
});
